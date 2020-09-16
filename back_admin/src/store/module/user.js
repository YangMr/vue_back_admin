import { getToken, setToken, getInfo, setInfo, removeToken } from "../../utils/auth.js"
import { login, logout } from "../../api/login.js"
const user = {
    state: {
        token: getToken(),
        info: getInfo()
    },
    getters: {
        get_token(state) {
            return state.token;
        },
        get_info(state) {
            return state.info;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            setToken(token)
        },
        SET_INFO(state, info) {
            state.info = info;
            setInfo(info)
        },
        REMOVE_TOKEN(state) {
            state.token = null;
            state.info = null;
            removeToken();
        }
    },
    actions: {
        //登录
        Login({ commit }, form) {
            login(form).then(response => {
                const resp = response.data;
                commit("SET_TOKEN",resp.data.token)
                console.log(response)
            })
        }
    }
}

export default user;