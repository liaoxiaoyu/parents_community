/**
 * Created by liao on 2018/3/19.
 */

import user from '../models/user.js';

const getUserInfo = async function (ctx) {
  const id= ctx.params.id;
  const result = await user.getUserById(id);
  ctx.body = result
};

export default {
  getUserInfo
}
