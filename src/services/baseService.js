import Axios from "axios";
import { DOMAIN, ACCESSTOKEN, TOKEN_CYBERSOFT } from "../util/setting";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {TokenCyberSoft:TOKEN_CYBERSOFT, Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {TokenCyberSoft:TOKEN_CYBERSOFT, Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {TokenCyberSoft:TOKEN_CYBERSOFT, Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) }, //ACCESSTOKEN yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {TokenCyberSoft:TOKEN_CYBERSOFT, Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
