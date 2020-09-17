<template>
  <div class="image">
    <div class="Breadcrumb">面包屑导航</div>
    <div class="image-column d-flex">
      <form action>表单</form>
      <div class="btn-group">
        <el-button size="mini" type="success">创建相册</el-button>
        <el-button size="mini" type="success" @click="dialogUpload=true">上传图片</el-button>
      </div>
    </div>
    <div class="image-main">
      <div class="image-list">
        <ul class="list">
          <li v-for="(item,index) in albumList" :key="index" @click="pic(item.id)">
            <span>{{item.name}}</span>
            <el-dropdown trigger="click" @command="drop">
              <span class="el-dropdown-link">
                {{item.images_count}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  icon="el-icon-plus"
                  :command="beforeHandleCommand('change',item.id)"
                >修改</el-dropdown-item>
                <el-dropdown-item
                  icon="el-icon-circle-plus"
                  :command="beforeHandleCommand('delete',item.id)"
                >删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
        <div class="btn-page">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <span class="page-link" @click="prev">上一页</span>
              </li>
              <li class="page-item">
                <span class="page-link" @click="next">下一页</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="image-content">
        <div class="pic-list">
          <img v-for="(item,index) in imageList" :key="index" :src="item.url" />
        </div>
      </div>
    </div>

    <el-dialog title="修改相册" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <el-form-item label="相册名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="相册排序" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.order"
            @change="handleChange"
            :min="1"
            :max="100"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeName">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="上传图片" :visible.sync="dialogUpload" @closed="upload">
      <el-upload
        class="upload-demo"
        drag
        action="/api/admin/image/upload"
        multiple
        :headers="{ token:$store.state.user.token }"
        :data="{ image_class_id:albumId }"
        name="img"
        :on-success="uploadSuccess"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import {
  AlbumClassi,
  removeImageAlbum,
  PicList,
  changeImage,
  uploadImage
} from "../../api/image.js";
export default {
  name: "",
  data() {
    return {
      dialogUpload: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        order: 0
      },
      page: 1,
      limit: 10,
      total: 0,
      albumList: [],
      imageList: [],
      picPage: 1,
      albumId: 0
    };
  },
  created() {
    this.getAlbumList();
  },
  methods: {
    uploadSuccess(response,file,fileList) {
        console.log(response.msg)
        if(response.msg == "ok"){
            this.$message("上传成功");
            this.dialogUpload =false;
        }
    },
    upload() {
      this.getAlbumList();
    },
    drop(key) {
      switch (key.name) {
        case "change":
          this.changeImageName(key.id);
          break;
        case "delete":
          this.deleteImage(key.id);
          break;
      }
    },
    changeName() {
      changeImage(this.form.id, this.form.name, this.form.order).then(
        response => {
          console.log(response);
          if (response.data.data) {
            this.$message("修改成功");
            this.dialogFormVisible = false;
          }
        }
      );
    },
    changeImageName(id) {
      this.dialogFormVisible = true;
      const imageData = this.albumList.filter((item, index) => {
        return item.id == id;
      });
      console.log(imageData);
      this.form = imageData[0];
      console.log(this.form);
    },
    deleteImage(id) {
      removeImageAlbum(id).then(response => {
        if (response.data.data) {
          this.$message("删除成功");
          this.getAlbumList();
        } else {
          this.$message("删除失败");
        }
      });
    },
    beforeHandleCommand(item, row) {
      return {
        name: item,
        id: row
      };
    },
    prev() {
      if (this.page <= 1) return;
      this.page--;
      this.getAlbumList();
    },
    next() {
      if (this.page >= Math.ceil(this.total / this.limit)) return;
      this.page++;

      this.getAlbumList();
    },
    getAlbumList() {
      AlbumClassi(this.page, this.limit)
        .then(response => {
          console.log(response);
          this.albumList = response.data.data.list;
          this.total = response.data.data.totalCount;
          //   this.albumId = response.data.data.list[0].id
          this.pic(response.data.data.list[0].id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    pic(id) {
      this.albumId = id;
      this.getPicList();
    },
    getPicList() {
      PicList(this.albumId, this.picPage).then(response => {
        console.log(response);
        this.imageList = response.data.data.list;
      });
    },
    handleChange() {}
  },
  components: {}
};
</script>


<style scoped>
.image-main {
  display: flex;
}
.image-content {
  width: 100%;
  overflow: hidden;
}
.image-content img {
  padding: 20px;
}

.image-column {
  justify-content: space-between;
}
.image-list {
  width: 150px;
}
.image-list .list {
  height: 530px;
  overflow: auto;
  background: #ccc;
}
.image-list li {
  padding: 20px 0;
}
</style>