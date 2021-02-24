import request from "@/utils/request";

// 这里的 param 是干什么的
export function getList(params) {
  return request({
    // url: "/vue-admin-template/table/list",
    url: "http://localhost:9000/v1/todo",
    method: "get",
    params
  });
}

// 从数据库中拿到某一个特定的值
// 这种写法？？？？？？？？？？？？？？
export function getItem() {
  return request({
    url: "/vue-admin-template/table/list/1",
    method: "get"
  });
}

export function getTodoList() {
  this.axios.get("http://localhost:9000/v1/todo"); // 这里本来应该是 9000 的 todo
}
