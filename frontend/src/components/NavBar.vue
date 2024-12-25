<script setup>
    import { ref, reactive } from 'vue'
    const dropdownOpen = ref(false)

    function toggleDropdown() {
        dropdownOpen.value = !dropdownOpen.value;
        }

    function closeDropdown() {
        dropdownOpen.value = false;
        }
    
</script>

<template>
        <nav class="fixed top-0 left-0 w-full bg-blue-500 text-white p-3 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
            <!-- Left Menu -->
            <div class="flex space-x-4">
                <a
                href="#"
                class="text-lg font-medium hover:bg-blue-500 px-3 py-2 rounded-md"
                >
                Home
                </a>
                <a
                href="#"
                class="text-lg font-medium hover:bg-blue-500 px-3 py-2 rounded-md"
                >
                About
                </a>
                <a
                href="#"
                class="text-lg font-medium hover:bg-blue-500 px-3 py-2 rounded-md"
                >
                Band
                </a>
                <a
                href="#"
                class="text-lg font-medium hover:bg-blue-500 px-3 py-2 rounded-md"
                >
                Contact
                </a>
            </div>
    
            <!-- Right Profile Section -->
            <div class="relative">
                <button
                @click="toggleDropdown"
                class="flex items-center space-x-2 focus:outline-none"
                >
                <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    class="w-10 h-10 rounded-full"
                />
                <span class="text-lg font-medium">Profile</span>
                <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
                </button>
    
                <!-- Dropdown Menu -->
                <div
                v-show="dropdownOpen"
                @click="closeDropdown"
                class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10"
                >
                <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-gray-200 rounded-t-md"
                >
                    View Profile
                </a>
                <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                    Settings
                </a>
                <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-gray-200 rounded-b-md"
                >
                    Logout
                </a>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </template>