<template>
  <div>
    <router-link to="/">Home</router-link>
    <button @click="gotoAbout"> 关于</button>
  </div>
  <div>
    关于博客xxxx
  </div>
</template>
<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();
const gotoAbout = () => {
  router.push({
    path: '/about',
    query: {id: "xxxx"}
  })
}
</script>