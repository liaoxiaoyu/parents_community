/**
 * Created by liao on 2018/3/19.
 */

import auth from '../controllers/user';
import koaRouter from 'koa-router';

const router = new koaRouter();

router.get('/user/:id', auth.getUserInfo)

export default router
