/**
 * Created by liao on 2018/3/19.
 */

import koa from 'koa';

const app = new koa();

export default app.listen(8888, () => {
  console.log('koa is listening in 8888')
})
