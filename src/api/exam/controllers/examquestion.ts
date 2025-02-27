/**
 * exam question controller
 */

export default {
  // Delete a specific question from an exam
  // DELETE /api/exams/:id/questions/:questionId
  async deleteQuestion(ctx) {
    try {
      const { id, questionId } = ctx.params;

      const exam: any = await strapi.entityService.findOne(
        "api::exam.exam",
        id,
        {
          populate: ["question"],
        }
      );

      if (!exam) {
        return {
          ok: false,
          message: "Không tìm thấy bài thi !",
        };
      }

      const updatedQuestions =
        exam.question?.filter((q) => q.id !== parseInt(questionId)) || [];

      const result = await strapi.entityService.update("api::exam.exam", id, {
        data: {
          question: updatedQuestions,
        },
      });

      return {
        ok: true,
        message: "Câu hỏi đã được xóa khỏi bài thi thành công !",
      };
    } catch (err) {
      return {
        ok: false,
        message: "Lỗi khi xóa câu hỏi: " + err.message,
      };
    }
  },

  // Add a question to an exam
  // POST /api/exams/:id/questions
  async addQuestion(ctx) {
    try {
      const { id } = ctx.params;
      const data = ctx.request.body;

      // Validate if ID exists first
      if (!id) {
        return {
          ok: false,
          message: "ID bài thi không hợp lệ",
        };
      }

      // Check if exam exists
      const exam: any = await strapi.entityService.findOne(
        "api::exam.exam",
        id,
        {
          ...ctx.query,
          populate: ["question"],
        }
      );
      console.log("exam", exam);

      // Separate check for null/undefined exam even though ID exists
      if (!exam || exam === null) {
        return {
          ok: false,
          message: "Không tìm thấy bài thi với ID: " + id,
        };
      }

      const questionExists = exam.question.some(
        (existingQuestion) => existingQuestion.question === data.question
      );

      if (questionExists) {
        return {
          ok: false,
          message: "Câu hỏi đã tồn tại trong bài thi !",
        };
      }

      // Add new question to existing questions array
      const updatedQuestions = exam.question
        ? [...exam.question, data]
        : [data];

      // Update exam with new question
      await strapi.entityService.update("api::exam.exam", id, {
        data: { question: updatedQuestions },
      });

      return {
        ok: true,
        data: exam,
        message: "Thêm câu hỏi thành công !",
      };
    } catch (err) {
      return {
        ok: false,
        message: "Lỗi khi thêm câu hỏi: " + err.message,
      };
    }
  },

  // edit question
  // PUT /api/exams/:id/questions/:questionId
  async editQuestion(ctx) {
    try {
      const { id, questionId } = ctx.params;
      const data = ctx.request.body;

      // find exam by id
      const exam: any = await strapi.entityService.findOne(
        "api::exam.exam",
        id,
        {
          ...ctx.query,
          populate: ["question"],
        }
      );

      if (!exam) {
        return {
          ok: false,
          message: "Không tìm thấy bài thi !",
        };
      }

      // Find question by questionId instead of data.id
      const updatedQuestions = exam.question.map((q) => {
        if (q.id.toString() === questionId) {
          return { ...q, ...data };
        }
        return q;
      });

      // Check if question was found and updated
      if (JSON.stringify(updatedQuestions) === JSON.stringify(exam.question)) {
        return {
          ok: false,
          message: "Không tìm thấy câu hỏi cần chỉnh sửa !",
        };
      }
      // update exam with new question
      strapi.entityService.update("api::exam.exam", id, {
        data: { question: updatedQuestions },
      });

      return {
        ok: true,
        message: "Câu hỏi đã được chỉnh sửa thành công !",
      };
    } catch (err) {
      return {
        ok: false,
        message: "Lỗi khi chỉnh sửa câu hỏi: " + err.message,
      };
    }
  },
};
