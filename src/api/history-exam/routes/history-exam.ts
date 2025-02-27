/**
 * exam router
 */

export default {
  routes: [
    // lấy 1 bài thi
    {
      method: "GET",
      path: "/history-exam/:id",
      handler: "api::history-exam.history-exam.findOne",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // lấy tất cả lịch sử bài thi
    {
      method: "GET",
      path: "/history-exam",
      handler: "api::history-exam.history-exam.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // tạo lịch sử bài thi
    {
      method: "POST",
      path: "/history-exam",
      handler: "api::history-exam.history-exam.create",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
