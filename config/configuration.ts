const DEFAULT_PORT = 3000;

export default () => ({
  port: +process.env.PORT || DEFAULT_PORT,
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '__horus__',
    password: 'Neoragex97@',
    database: 'kooza',
  },
});
