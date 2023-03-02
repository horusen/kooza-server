const DEFAULT_PORT = 3000;

export default () => ({
  port: +process.env.PORT || DEFAULT_PORT,
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'kooza',
  },
});
