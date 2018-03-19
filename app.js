/**
 * Created by liao on 2018/3/19.
 */

import koa from 'koa'
import koaRouter from 'koa-router'
import auth from './server/routes/auth.js'

const app = new koa()
const router = new koaRouter()

router.use('/auth', auth.routes())

app.use(router.routes())

export default app.listen(8888, () => {
  console.log('koa is listening in 8888')
})
