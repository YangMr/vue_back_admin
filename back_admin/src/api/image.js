//引入封装axios请求配置
import request from '../utils/request.js'

/*封装相册管理相关的api接口*/

//获取相册分类列表接口
export function AlbumClassi(page,limit){
    return request({
        url : `/admin/imageclass/${page}`,
        method : 'GET',
        params : {
            limit : limit
        }
    })
}

//封装图片列表接口
export function ImageList(id,page,limit = "",order = "",keyword=""){
    return request({
        url : `/admin/imageclass${id}/image/${page}`,
        method : 'GET',
        params : {
            limit,
            order,
            keyword
        },
    })
}

//封装删除图片分类接口
export function removeImageAlbum(id){
    return request({
        url : `/admin/imageclass/${id}`,
        method : "DELETE"
    })
}

//封装图片列表接口
export function PicList(id,page,limit="",order="",keyword=""){
    return request({
        url : `/admin/imageclass/${id}/image/${page}`,
        method : "GET",
        params : {
            limit,
            order,
            keyword
        }
    })
}

//封装修改相册分类名称接口
export function changeImage(id,name,order) {
    return request({
        url : `/admin/imageclass/${id}`,
        method : "POST",
        data : {
            order,
            name
        }
    })
}
