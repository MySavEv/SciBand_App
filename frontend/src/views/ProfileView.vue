<script setup>
  import { useUserLists } from '@/stores/counter';
  import { getStrapiApi } from '@/utils/strapi';
  import { reactive,ref } from 'vue';

  const users = useUserLists()

  async function testt(){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    try {
      const res = await fetch(getStrapiApi("/users"), requestOptions)
      const status = res.status;
      console.log(status);
      
      const result = await res.json()

      users.setUsers(result)
      
      console.log(users.users);
    } catch (error) {
      console.log(error);
      
    }

    
  }

  testt()

  
  

</script>

<template>
  <div>
    <button
      @click="test"
    > Click Me!!  </button>
  </div>
</template>

<style scoped>

</style>
