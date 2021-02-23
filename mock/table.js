const Mock = require("mockjs");

// 这里使用 mock js 模拟 url 传入的数据
// 这里是随机生成的数据
// 问题：这里的 @ 指什么？？？
// const data = Mock.mock({
//   "items|30": [
//     {
//       id: "@id",
//       title: "@sentence(10, 20)",
//       "status|1": ["published", "draft", "deleted"],
//       author: "name",
//       display_time: "@datetime",
//       pageviews: "@integer(300, 5000)"
//     }
//   ]
// });

const data = {
  items: [
    {
      id: 1,
      title: "Test",
      author: "Adam",
      pageviews: 10,
      status: "published"
    },
    {
      id: 2,
      title: "Test",
      author: "Auhter",
      pageviews: 10,
      status: "published"
    },
    {
      id: 3,
      title: "Test",
      author: "Alex",
      pageviews: 10,
      status: "published"
    }
  ]
};

module.exports = [
  {
    url: "/vue-admin-template/table/list",
    type: "get",
    response: config => {
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      };
    }
  },
  // 这里需要接一个参数
  {
    url: "/vue-admin-template/table/list/1",
    type: "get",
    response: config => {
      console.log(url);
      const items = data.items;
      return {
        code: 20000,
        data: {
          item: items[1]
        }
      };
    }
  }
];
