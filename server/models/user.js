/**
 * Created by liao on 2018/3/19.
 */

import db from '../config/db.js';
const userModel = require('../schema/user.js');
const Parent_Help_DB = db.Parent_Help;

const User = Parent_Help_DB.import(userModel);

const getUserById = async function (id) {
  const userInfo = User.findOne({
    where: {
      id: id
    }
  });
  return userInfo;
};

export default {
  getUserById
}
