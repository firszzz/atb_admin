<script>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { collapsed } from "./state"
export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<template>
    <router-link :to="to" :class="{ active: isActive }">
        <transition name="fade">
          <a v-if="!collapsed" href="#" class="flex gap-2 py-3 px-10 hover:bg-orange-500 hover:text-white font-medium">
              <slot />
          </a>
        </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: black;
  text-decoration: none;
}
.link:hover {
  background-color: blue;
}
.link.active {
  background-color: red;
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>