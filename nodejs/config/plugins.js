
module.exports = ({ env }) => ({
  upload: {
    provider: "ftp-v2",
    providerOptions: {
      host: "121.134.115.22",
      port: "21",
      user: "minsekim",
      password: "tkarnr78^@",
      basePath: "/ftp/",
      baseUrl: "http://121.134.115.22/ftp/",
      // "http://218.153.157.69/ftp/",
    },
  },
});
