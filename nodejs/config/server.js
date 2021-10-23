module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 443),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4ab1e009e9ae924e959705fc59c73bf4'),
    },
  },
});
