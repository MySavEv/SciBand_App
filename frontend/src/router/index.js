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
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ],
})

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !await isAuthen() &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
