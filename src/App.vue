<template>
  
  <div class="min-h-full">
    <NAVBAR/>
   
    <main class="bg-[#FFFFFF]">
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
        <SEARCHFILTERTABLE/>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'

import NAVBAR from "./components/NAVBAR.vue";
import SEARCHFILTERTABLE from "./components/SEARCHFILTERTABLE.vue";






</script>

<style scoped></style>
