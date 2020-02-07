import request from "./request.js"

class Api {
  login(data){
    return request("/login",{method:"POST",data})
  }
}

export default new Api();