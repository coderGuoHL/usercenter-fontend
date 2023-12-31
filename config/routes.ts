﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin/user-manager', name: '用户管理页', icon: 'smile', component: './Admin/UserManager' },
      { component: './Admin/UserManager' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
