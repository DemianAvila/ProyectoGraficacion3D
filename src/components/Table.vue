<template>
  <div class="grid
  grid-cols-5
  text-white
  px-10
  pt-10
  text-center">
    <div class="border-slate-100
  border-2
  bg-slate-900">
      Punto
    </div>
    <div class="border-slate-100
  border-2
  bg-slate-900">
      X
    </div>
    <div class="border-slate-100
  border-2
  bg-slate-900">
      Y
    </div>
    <div class="border-slate-100
  border-2
  bg-slate-900">
      Z
    </div>
    <div class="border-slate-100
  border-2
  bg-slate-900">
      Quitar Punto
    </div>
  </div>

  <div v-for="(item, index) in $store.state.vertices" :key="index"
  class="grid
  grid-cols-5
  text-white
  px-10
  text-center">
    <div class="border-slate-100
  border-2
  bg-slate-900">
      {{index+1}}
    </div>
    <div class="border-slate-100
  border-2">
      <input class="w-full
      h-full
      text-black"
      type="number"
      v-model="item[0]">
    </div>
    <div class="border-slate-100
  border-2">
      <input class="w-full
      h-full
      text-black"
      type="number"
      v-model="item[1]">
    </div>
    <div class="border-slate-100
  border-2">
      <input class="w-full
      h-full
      text-black"
      type="number"
      v-model="item[2]">
    </div>
    <div class="border-slate-100
  border-2
  bg-slate-900">
      <button class="w-full
      h-full"
      @click="$store.commit('quita_punto')">
      -
      </button>
    </div>
  </div>

  <div class="grid
  grid-cols-3
  text-white
  py-5">
    <button class="col-start-2
    border-slate-100
    border-2
  bg-slate-900"
    @click="$store.commit('aniade_punto')">
      Añadir nuevo punto
    </button>
  </div>
</template>

<script>
export default {
  name: 'DynamicTable'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>