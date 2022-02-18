import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/my', component: '@/pages/my' },//我的音乐
        { path: '/friend', component: '@/pages/friend' },
        {
          path: '/find',
          component: '@/pages/find',
          routes: [
            { path: '/find/discover', component: '@/pages/discover' },
            { path: '/find/playList', component: '@/pages/playList' },
            { path: '/find/topList', component: '@/pages/topList' }]
        },//发现音乐
      ]
    },

    // {
    //   path: '/',
    //   component: '@/pages/index',
    //   routes: [
    //     { path: '/', component: '@/pages/discover' },
    //     { path: '/discover', component: '@/pages/discover' },
    //     { path: '/discover/topList', component: '@/pages/topList' }]
    // },
    // { path: '/my', component: '@/pages/my' },
    // { path: '/friend', component: '@/pages/friend' },
  ],
  history: {
    type: 'hash'
  },
  fastRefresh: {},
});
