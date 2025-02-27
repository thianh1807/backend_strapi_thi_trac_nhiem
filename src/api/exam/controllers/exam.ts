/**
 * exam controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::exam.exam",
  ({ strapi }) => ({
    // Create a new exam
    // POST /api/exams
    async create(ctx) {
      try {
        const { data } = ctx.request.body;
        const result = await strapi.entityService.create("api::exam.exam", {
          data: data,
        });
        return {
          ok: true,
          data: result,
          message: "Bài thi đã được tạo thành công !",
        };
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    // Find all exams
    // GET /api/exams
    async find(ctx) {
      try {
        const exams = await strapi.entityService.findMany("api::exam.exam", {
          ...ctx.query,
        });
        return { data: exams };
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    // Find one exam by ID
    // GET /api/exams/:id
    // async findOne(ctx) {
    //   try {
    //     const { id } = ctx.params;
    //     const exam = await strapi.entityService.findOne('api::exam.exam', id, {
    //       ...ctx.query,
    //       populate: ['question']
    //     });

    //     // Check if exam exists
    //     console.log(exam);
    //     if (!exam) {
    //       return {
    //           ok: false,
    //           message: 'Không tìm thấy bài thi'
    //       };
    //     }

    //     return {
    //       ok: true,
    //       data: exam,
    //       message: 'Bài thi đã được tìm thấy thành công',

    //     };
    //   } catch (err) {
    //     return ctx.badRequest('Lỗi khi tìm kiếm bài thi: ' + err.message);
    //   }
    // },

    // Update an exam
    // PUT /api/exams/:id
    async update(ctx) {
      try {
        const { id } = ctx.params;
        const requestData = ctx.request.body;

        // Extract data from array if needed
        const data = Array.isArray(requestData.data)
          ? requestData.data[0]
          : requestData.data;

        // Validate data
        if (!data || typeof data !== "object") {
          return {
            ok: false,
            message: "Invalid data format",
          };
        }

        const result = await strapi.entityService.update("api::exam.exam", id, {
          data: data,
        });

        if (!result) {
          return {
            ok: false,
            message: "Không thể cập nhật bài thi",
          };
        }

        return {
          ok: true,
          data: result,
          message: "Bài thi đã được cập nhật thành công !",
        };
      } catch (err) {
        return {
          ok: false,
          message: "Lỗi khi cập nhật bài thi: " + err.message,
        };
      }
    },

    // Delete an exam
    // DELETE /api/exams/:id
    async delete(ctx) {
      try {
        const { id } = ctx.params;

        // Delete entire exam if no questionId
        const result = await strapi.entityService.delete("api::exam.exam", id);
        return {
          ok: true,
          data: result,
          message: "Bài thi đã được xóa thành công !",
        };
      } catch (err) {
        return {
          ok: false,
          message: "Lỗi khi xóa bài thi: " + err.message,
        };
      }
    },
  })
);
