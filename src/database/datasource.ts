import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'kooza',
  entities: [],
  migrations: ['./src/database/migration/**/*.ts'],
});

// export const dataSource = buildDataSource();
