module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "3.35.144.255"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "campustaxi_2021_2"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "m~WJ<iQs5DiSF*j#5yw/kA"),
      },
      options: {},
    },
  },
});
