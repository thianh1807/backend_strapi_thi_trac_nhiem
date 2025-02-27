/**
 *  practice controller
 */

import { factories } from "@strapi/strapi";
import { Context } from "koa";

export default factories.createCoreController(
  "api::practice.practice",
  ({ strapi }) => ({
    async deletePractice(ctx: Context) {
      try {
        console.log(ctx);

        const { id } = ctx.params;

        const result = await strapi.entityService.delete(
          "api::practice.practice",
          id
        );
        console.log("xóa bài thi thử", result);

        return {
          ok: true,
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
