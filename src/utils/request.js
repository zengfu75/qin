import axios from 'axios'
import { Message } from "element-ui"

function checkStatus(data) {
  switch (Number(data.code)) {
    case 200: console.log("接口请求成功"); break;
    case 400: Message.warning("参数错误，请联系开发人员");
      break;
    case 500: Message.warning("服务器错误，请联系管理员"); break;
    case 401: Message.warning("用户未登录，请登录后访问");
      window.location.href = "/pc/login?returnUrl=" + encodeURI(window.location.href)
      break;
    default: Message.warning("当前错误形式未定，请联系开发人员"); break;
  }
}

function getAjax(url, params, other, headers, jsonP) {
  let data = params.data || {};
  let method = params.method || "get";
  let newUrl = other ? (other + url) : ("/users" + url);
  if (!jsonP) {
    return new Promise((resolve, reject) => {
      axios({
        method: method.toLowerCase(),
        url: newUrl,
        data: data,
        type: "json"
      }).then(res => {
        checkStatus(res);
        resolve(res);
      }).catch(err => {
        // console.log(err);
        // Message.error("网络错误请稍后...");
        reject({
          success:false,
          msg:"网络错误请稍后...",
          code:500,
          error:err
        })
      })
    })
  } else {
    return {
      success: false,
      code: 5000,
      msg: "暂不支持浏览器跨域"
    }
  }

}

const request = function (url, params, other, headers, jsonP = false) {
  return getAjax(url, params, other, headers, jsonP);
}

export default request