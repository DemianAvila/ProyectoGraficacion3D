<template>
 <div class="grid
  grid-cols-5
  text-white
  px-10
  pt-10
  text-center">
    <div class="border-slate-100
  border-2
  bg-slate-900
  col-start-2
  col-span-3">
      Transformaciones
    </div>
  </div>

<div v-for="(item, index) in $store.state.transformaciones" :key="index"
  class="grid
  grid-cols-3
  text-white
  px-10
  text-center
  pb-6">
 
    <select
    class="col-span-2
    text-black
    mr-6" 
    name="" 
    id=""
    v-model="item.transformacion">
      <option value="escalar">
        Escalar
      </option>
      <option value="rotar">
        Rotar
      </option>
      <option value="trasladar">
        Trasladar
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
    <div v-if="item.transformacion=='escalar'"
    class="border-slate-100
    border-2
  bg-slate-900
    col-span-3
    grid
    grid-cols-3">
      <div>
        Porcentaje
      </div>
      <div class="ml-6
      col-span-2
      text-black">
        <input type="number"
        class="w-full
        h-full"
        v-model="item.porcentaje">
      </div>
    </div>
    <div v-else-if="item.transformacion=='trasladar'"
    class="border-slate-100
    border-2
  bg-slate-900
    col-span-3
    grid
    grid-cols-3">
      <div>
        Eje
      </div>
      <div class="ml-6
      col-span-2
      text-black">
        <select name="" id="" v-model="item.eje">
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
        </select>
      </div>
      <div>
        Unidades
      </div>
      <div class="ml-6
      col-span-2
      text-black">
        <input type="number"
        class="w-full
        h-full"
        v-model="item.unidades">
      </div>
    </div>
    <div v-else-if="item.transformacion=='rotar'"
    class="border-slate-100
    border-2
  bg-slate-900
    col-span-3
    grid
    grid-cols-3">
      <div>
        Eje
      </div>
      <div class="ml-6
      col-span-2
      text-black">
        <select name="" id="" v-model="item.eje">
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
        </select>
      </div>
      <div>
        α
      </div>
      <div class="ml-6
      col-span-2
      text-black">
        <input type="number"
        class="w-full
        h-full"
        v-model="item.alpha">
      </div>
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
      Añadir nueva transformacion
    </button>
  </div>
</template>

<script>
export default {
  name: 'TransformacionesOpt'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>