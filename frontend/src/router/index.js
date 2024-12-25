import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getStrapiApi } from '@/utils/strapi'

const isAuthen = async () => {
  let jwt = localStorage.getItem("jwt")
  let url = getStrapiApi('/users/me')

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(url, requestOptions);
    const status = response.status;

    if(status == 200){
      const data = await response.json();
      return true;
    }else{
      return false;
    }

  } catch (error) {
    console.log(error);
    
  }

  
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async (to, from) => {
        if (await isAuthen())
          return true
        else
          return { name: 'login' }
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/band',
      name: 'band',
      component: () => import('../views/ฺBandView.vue')
    }
  ],
})

export default router
