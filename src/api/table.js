import request from "@/utils/request";

// 这里的 param 是干什么的
export function getList(params) {
  return request({
    url: "/vue-admin-template/table/list",
    method: "get",
    params
  });
}

// 从数据库中拿到某一个特定的值
// 这种写法？？？？？？？？？？？？？？
export function getItem(params) {
  return request({
    url: "/vue-admin-template/table/list?id=" + params,
    method: "get"
  });
}
