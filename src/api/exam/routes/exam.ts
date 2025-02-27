/**
 * exam router
 */

export default {
  routes: [
    // lấy 1 bài thi
    {
      method: "GET",
      path: "/exams/:id",
      handler: "api::exam.exam.findOne",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // lấy tất cả bài thi
    {
      method: "GET",
      path: "/exams",
      handler: "api::exam.exam.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // tạo bài thi
    {
      method: "POST",
      path: "/exams",
      handler: "api::exam.exam.create",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // xóa bài thi
    {
      method: "DELETE",
      path: "/exams/:id",
      handler: "api::exam.exam.delete",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    //update bài thi
    {
      method: "PUT",
      path: "/exams/:id",
      handler: "api::exam.exam.update",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // xóa câu hỏi
    {
      method: "DELETE",
      path: "/exams/:id/questions/:questionId",
      handler: "api::exam.examquestion.deleteQuestion",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // // thêm câu hỏi
    {
      method: "POST", 
      path: "/exams/:id/questions",
      handler: "api::exam.examquestion.addQuestion",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // chỉnh sửa câu hỏi
    {
      method: "PUT",
      path: "/exams/:id/questions/:questionId",
      handler: "api::exam.examquestion.editQuestion",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
