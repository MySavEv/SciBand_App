<template>
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Band Management</h1>
  
        <!-- Create Event Section -->
        <section class="mb-8">
          <h2 class="text-lg font-semibold mb-4">Create New Event</h2>
          <form @submit.prevent="createEvent" class="space-y-4">
            <div>
              <label for="eventName" class="block text-sm font-medium text-gray-700">Event Name</label>
              <input
                type="text"
                id="eventName"
                v-model="newEvent.name"
                placeholder="Enter event name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label for="eventDate" class="block text-sm font-medium text-gray-700">Event Date</label>
              <input
                type="date"
                id="eventDate"
                v-model="newEvent.date"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Create Event
            </button>
          </form>
        </section>
  
        <!-- Event List -->
        <section class="mb-8">
          <h2 class="text-lg font-semibold mb-4">Upcoming Events</h2>
          <ul class="space-y-4">
            <li
              v-for="(event, index) in events"
              :key="index"
              class="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div>
                <h3 class="font-medium text-gray-800">{{ event.name }}</h3>
                <p class="text-sm text-gray-600">Date: {{ event.date }}</p>
              </div>
              <button
                @click="deleteEvent(index)"
                class="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </li>
          </ul>
        </section>
  
        <!-- Manage Instruments Section -->
        <section>
          <h2 class="text-lg font-semibold mb-4">Manage Instruments and Players</h2>
          <form @submit.prevent="addInstrument" class="space-y-4">
            <div>
              <label for="instrumentName" class="block text-sm font-medium text-gray-700">Instrument</label>
              <input
                type="text"
                id="instrumentName"
                v-model="newInstrument.name"
                placeholder="Enter instrument name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label for="playerName" class="block text-sm font-medium text-gray-700">Player</label>
              <input
                type="text"
                id="playerName"
                v-model="newInstrument.player"
                placeholder="Enter player's name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            >
              Add Instrument
            </button>
          </form>
  
          <ul class="mt-6 space-y-4">
            <li
              v-for="(instrument, index) in instruments"
              :key="index"
              class="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div>
                <h3 class="font-medium text-gray-800">
                  {{ instrument.name }} - {{ instrument.player }}
                </h3>
              </div>
              <button
                @click="deleteInstrument(index)"
                class="text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Event data
        newEvent: {
          name: "",
          date: "",
        },
        events: [],
  
        // Instrument data
        newInstrument: {
          name: "",
          player: "",
        },
        instruments: [],
      };
    },
    methods: {
      // Create a new event
      createEvent() {
        if (this.newEvent.name && this.newEvent.date) {
          this.events.push({ ...this.newEvent });
          this.newEvent.name = "";
          this.newEvent.date = "";
        }
      },
      // Delete an event
      deleteEvent(index) {
        this.events.splice(index, 1);
      },
      // Add a new instrument and player
      addInstrument() {
        if (this.newInstrument.name && this.newInstrument.player) {
          this.instruments.push({ ...this.newInstrument });
          this.newInstrument.name = "";
          this.newInstrument.player = "";
        }
      },
      // Remove an instrument
      deleteInstrument(index) {
        this.instruments.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* ใช้ Tailwind CSS สำหรับตกแต่ง */
  </style>
  