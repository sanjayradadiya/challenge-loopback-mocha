module.exports = {
  mongoDb: {
    'name': 'mongoDb',
    'connector': 'loopback-connector-mongodb',
    'url': process.env.DB_URL + process.env.DB_NAME,
  },
};
