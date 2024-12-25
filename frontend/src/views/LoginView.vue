<script setup>
  import { getStrapiApi } from '@/utils/strapi';
  import { ref } from 'vue';

  const username = ref('')
  const password = ref('')

  async function login() {
    const path = getStrapiApi("/auth/local/");
    const myHeaders = {
      "Content-Type": "application/json",
    };

    const payload = {
      identifier: username.value,
      password: password.value,
    };

    try {
      // ส่งคำขอ
      const response = await fetch(path, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(payload),
      });

      // ตรวจสอบสถานะ HTTP
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert(errorData.error?.message || "Login failed. Please try again.");
        return;
      }

      // อ่านข้อมูล JWT และจัดเก็บ
      const data = await response.json();
      localStorage.setItem("jwt", data.jwt);
      alert("Login successful!");
      console.log("JWT saved:", data.jwt);

      // ดำเนินการเพิ่มเติมหลังล็อกอินสำเร็จ เช่น redirect
      // window.location.href = "/dashboard"; 
    } catch (error) {
      // จัดการข้อผิดพลาดของเครือข่าย
      console.error("Network error:", error);
      alert("Unable to connect. Please try again later.");
    }
  }
  
</script>

<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            @click="login"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
</template>

<style scoped>

</style>
