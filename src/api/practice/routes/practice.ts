/**
 * exam router
 */

export default {
  routes: [
    // lấy 1 bài thi thử
    {
      method: "GET",
      path: "/practices/:id",
      handler: "api::practice.practice.findOne",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // lấy tất cả bài thi thử
    {
      method: "GET",
      path: "/practices",
      handler: "api::practice.practice.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // tạo bài thi thử
    {
      method: "POST",
      path: "/practices",
      handler: "api::practice.practice.create",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },

    // xóa bài thi thử
    {
      method: "DELETE",
      path: "/practices/:id",
      handler: "api::practice.practice.deletePractice",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/practices/:id",
      handler: "api::practice.practice.update",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
