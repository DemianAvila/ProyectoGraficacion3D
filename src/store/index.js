import { createStore } from 'vuex'

export default createStore({
  state: {
    //ARREGLO DE VERTICES (ARRRREGLO DE ARREGLOS)
    vertices:[[0,0,0]],
    //RECTAS, UNION ENTRE 2 PUNTOS
    rectas:[[null, null]],
    //TRANSFORMACIONES
    transformaciones: []
  },
  getters: {
  },
  mutations: {
    //ANIADE UN PUNTO AL ARREGLO DE VERTICES
    aniade_punto (state){
      state.vertices.push([0,0,0]);
    },
    aniade_arista(state){
      state.rectas.push([null, null]);
    },
    aniade_transformacion(state){
      state.transformaciones.push({});
    },
    quita_punto(state, indice){
      state.vertices.splice(indice,1);
    },
    quita_arista(state, indice){
      state.rectas.splice(indice,1);
    },
    quita_transformacion(state, indice){
      state.transformaciones.splice(indice,1);
    }
  },
  actions: {
  },
  modules: {
  }
})
