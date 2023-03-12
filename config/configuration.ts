const DEFAULT_PORT = 3000;

export default () => ({
  port: +process.env.PORT || DEFAULT_PORT,
  JWT_SECRET: 'N0!@e',
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'kooza',
  },
  messaging: {
    providerName: 'twilio',
    providerPhoneNumber: '+14155238886',
    personalPhoneNumber: '+221772884035',
    accountId: 'AC8cdb70b17e4fc837abc79d452705d578',
    authToken: '6cac4f7d8db45e0249917bc4b8bd65f0',
  },
});
