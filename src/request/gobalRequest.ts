/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";


const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production' ? 'http://154.8.195.55:8080' : undefined
});


/**
 * 所有响应拦截器
 */

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response: any, options: any): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === '0') {
    return res.data;
  }

  // 如果报错则需要提示用户错误信息
  message.error(res.description)
  return res.data;
});

export default request;
