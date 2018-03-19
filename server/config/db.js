/**
 * Created by liao on 2018/3/19.
 */

import Sequelize from 'sequelize';

const Parent_Help = new Sequelize('mysql://root:123456@localhost/parent_help', {
  define: {
    timestamp: false
  }
});

export default {
  Parent_Help
}
