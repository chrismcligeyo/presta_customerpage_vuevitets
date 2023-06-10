<template>
  
  <div class="min-h-full">
    <NAVBAR/>
   
    <main class="bg-[#FFFFFF]">
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
        <!-- <CUSTOMERLISTS/> -->
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import { ref,  onMounted } from 'vue';
import axios from "axios";


import NAVBAR from "./components/NAVBAR.vue";
import CUSTOMERLISTS from "./components/CUSTOMERLISTS.vue";
import type {CustomerList} from "./types/CustomerList";


const customerlists = ref<CustomerList[]>([]);  //customerlists is an empty array of customerlist objects

async function loadcuctomerlists(){
//  const res = await axios.get("http://localhost:3000/api/customerlists");
const res = await axios.get("api/customerlists");
 
 console.log(res);

}


onMounted(() => {
  console.log(`the component is now mounted.`)
  // customerlists.value = 
  loadcuctomerlists();
});
</script>

<style scoped></style>
