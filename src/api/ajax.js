import axios from "axios";
import { storage } from "../utils/storage";
import { message } from "antd";

const menusId = (v) => {
  if (v) {
    const menuTree = v.menuTree.children;
    const l = window.location.pathname.split("/");
    const pID = menuTree.find(({ menuType }) => menuType === l[1]);
    if (pID) {
      if (pID.children && pID.children.length > 0) {
        const cID = pID.children.find(({ menuType }) => menuType === l[2]);
        return cID.id;
      }
      return pID.id;
    }
    return "";
  }
};

// axios.defaults.timeout = 20000;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    switch (response.data.code) {
      case 200:
        return response.data;
      case 402: {
        storage.clearData("local", "userInfo");
        message.error(response.data.msg);
        window.document.location.href = "/login";
        return Promise.reject(response.data.msg);
      }
      // case 425:
      //   return Promise.reject(response.data);

      default: {
        const MSG = response.data.msg
          ? response.data.msg
          : "网络错误，请稍后再试！";
        message.error(MSG);
        return Promise.reject(MSG);
      }
    }
  },
  (error) => {
    const MSG = "网络错误，请稍后再试！";
    message.error(MSG);
    return Promise.reject(MSG);
  }
);

export const request = async (
  url,
  params,
  type,
  flag,
  header = {},
  timeout,
  data
) => {
  const userInfo = storage.getData("userInfo");
  const MID = userInfo ? menusId(userInfo) : null;
  const token = userInfo ? userInfo.token : null;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
    menuId: MID,
    flag: flag,
    ...header,
  };

  if (
    !header &&
    token === null &&
    window.document.location.pathname.length < 2
  ) {
    // console.log(window.document.location.pathname, header.token, token);
    // setTimeout(()=>{
    //   window.document.location.href='/login';
    //   return null;
    // }, 10000);
    return null;
  }

  let options = {
    method: type.toUpperCase(),
    headers: headers,
    timeout: timeout || 1 * 60 * 1000,
  };
  if (type.toUpperCase() === "GET" || type.toUpperCase() === "DELETE") {
    options = {
      ...options,
      url,
      params,
      data,
    };
  } else {
    options = {
      ...options,
      data: params,
      url,
    };
  }
  return await axios(options);
};
