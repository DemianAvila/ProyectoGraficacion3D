<template>
  <div class="bg-scroll"
  style="background-image: url('https://drive.google.com/uc?export=view&id=1-g_n2y_cNO1LX9ZrlmGR8_0r04bwdS_8');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;">
    <div class="grid
    grid-cols-3">
      <div>
        <DynamicTable></DynamicTable>
      </div>
      <div>
        <AristasTabla></AristasTabla>
      </div>
      <div>
        <TransformacionesOpt></TransformacionesOpt>
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src

import DynamicTable from '@/components/Table.vue'
import AristasTabla from '@/components/Aristas.vue'
import TransformacionesOpt from '@/components/Transformaciones.vue'


export default {
  name: 'HomeView',
  components: {
    DynamicTable,
    AristasTabla,
    TransformacionesOpt
}
}
</script>
