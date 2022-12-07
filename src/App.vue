<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <div class="flex">
    <Sidebar></Sidebar>
    <router-view class="w-5/6" />
  </div>
</template>

<style>
@import "assets/tailwind.css";
</style>
