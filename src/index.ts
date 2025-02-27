import type { Core } from "@strapi/strapi";

const keepServerAlive = async (strapi: Core.Strapi) => {
  try {
    // Kiểm tra kết nối database trước


    // Thực hiện HTTP request đến API
    const response = await fetch('https://backend-strapi-thi-trac-nhiem-7w7u.onrender.com/api/global?populate=*');
    const data = await response.json();

    console.log("Ping server thành công:", new Date().toISOString());
    if (data) {
      console.log("Data:", data); // Sửa từ response thành data
    }
  } catch (error) {
    console.error("Lỗi khi ping server:", error);
  }

  // Lập lịch gọi lại sau 40 giây
  setTimeout(() => keepServerAlive(strapi), 30000);
};

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Khởi động hàm ping server
    keepServerAlive(strapi);
  },
};