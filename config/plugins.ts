export default ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 1000000,
        path: "./public/uploads", // Đường dẫn phải là ./public/uploads
      },
    },
  },
});
