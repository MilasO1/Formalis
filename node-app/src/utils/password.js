const bcrypt = require('bcrypt');

const hashPassword = async (plain) => {
  const saltRounds = 10;
  return await bcrypt.hash(plain, saltRounds);
};

const comparePassword = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};

module.exports = { hashPassword, comparePassword };
