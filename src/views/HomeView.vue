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
      <!--BOTON PARA VER EL MODELO-->
      <div class="col-start-2
      grid
      grid-cols-3">
        <button class="col-start-2
      border-slate-100
        border-2
      bg-slate-900
      text-white"
        @click="get_all_data">
          Visualizar
        </button>
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src

import DynamicTable from '@/components/Table.vue'
import AristasTabla from '@/components/Aristas.vue'
import TransformacionesOpt from '@/components/Transformaciones.vue'
//import * as THREE from 'three'

export default {
  name: 'HomeView',
    components: {
    DynamicTable,
    AristasTabla,
    TransformacionesOpt
  },
  methods:{
  get_all_data: function (){
    console.log(this.$store.state)
    let transformaciones = this.$store.getters.haz_transformaciones
    console.log(transformaciones)
  }
}
}


      /*
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

			const renderer = new THREE.WebGLRenderer()
			renderer.setSize( window.innerWidth, window.innerHeight )
      //document.getElementById("container").appendChild( renderer.domElement )
      document.body.appendChild( renderer.domElement )
      //let container = document.getElementById( 'container' )
      //container.appendChild( renderer.domElement )

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
			const cube = new THREE.Mesh( geometry, material )
			scene.add( cube )

			camera.position.z = 5

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			}

			animate()*/

</script>



