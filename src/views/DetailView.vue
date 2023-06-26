<script setup >

// import {ref} from "vue"
import {useStore} from "@/store"

const storePay = useStore()


</script>

<template>
  <div>
      Details Page {{ storePay.count }}
  </div>



</template>



<style scoped lang="scss">

</style>