<template>
 <div class="grid
  grid-cols-3
  text-white
  px-10
  pt-10
  text-center">
    <div class="border-slate-100
  border-2
  bg-slate-900
  col-start-2">
      Aristas
    </div>
  </div>

  <div v-for="(item, index) in $store.state.rectas" :key="index"
  class="grid
  grid-cols-5
  text-white
  px-10
  text-center
  pb-6">
    <select
    class="col-span-2
    text-black
    mx-6" 
    name="" 
    id=""
    v-model="item[0]">
      <option 
      v-for="(item2, index2) in $store.state.vertices" :key="index2"
      :value="index2+1">
      {{index2+1}}
      </option>
    </select>
    <select
    class="col-span-2
    text-black
    mx-6" 
    name="" 
    id=""
    v-model="item[1]">
      <option 
      v-for="(item2, index2) in $store.state.vertices" :key="index2"
      :value="index2+1">
      {{index2+1}}
      </option>
    </select>
    <div class="border-slate-100
    border-2
  bg-slate-900">
      <button class="w-full
      h-full"
      @click="$store.commit('quita_transformacion', index)">
      -
      </button>
    </div>
  </div>

   <div class="grid
  grid-cols-3
  text-white">
    <button class="col-start-2
    border-slate-100
    border-2
  bg-slate-900"
    @click="$store.commit('aniade_transformacion')">
      Añadir nueva arista
    </button>
  </div>
</template>

<script>
export default {
  name: 'AristasTabla'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>