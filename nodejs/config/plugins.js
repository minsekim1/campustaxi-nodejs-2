
module.exports = ({ env }) => ({
  upload: {
    provider: "ftp-v2",
    providerOptions: {
      host: "218.153.157.69",
      port: "21",
      user: "minsekim",
      password: "tkarnr78^@",
      basePath: "/ftp/",
      baseUrl:
        "http://218.153.157.69/ftp/",
    },
  },
});
