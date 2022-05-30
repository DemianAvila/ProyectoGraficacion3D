import { createStore } from 'vuex'
import Plotly from 'plotly.js-dist-min'

export default createStore({
  state: {
    //ARREGLO DE VERTICES (ARRRREGLO DE ARREGLOS)
    vertices:[[0,0,0]],
    //RECTAS, UNION ENTRE 2 PUNTOS
    rectas:[[null, null]],
    //TRANSFORMACIONES
    transformaciones: [],
    show_plots: false,
    puntos: null,
    id_plots: null,
    plots: null
  },
  getters: { 
  //LISTA QUR CONTIENE TODOS LOS PUNTOS
  haz_transformaciones(state){
    let puntos=[JSON.parse(JSON.stringify(state.vertices))];
    //let cumulo =[]
    let puntos_transformados=[];
    let nv_punto=[];
    //let cumulo_copy=[]
    //let i=0;
    //ITERA SOBRE CADA UNA DE LAS TRANSFORMACIONES
    state.transformaciones.forEach(function(item){
      nv_punto=[]
      puntos_transformados=[];
      //POR CADA TRANSFORMACION
      if (item.transformacion=='escalar'){
        //POR CADA UNO DE LOS PUNTOS TRANSFORMADOS
        puntos.at(-1).forEach(function(item2){
          nv_punto=[]
          //POR CADA COORDENADA
          item2.forEach(function(item3){
            nv_punto.push(item3*(item.porcentaje/100))
          })
          //EMPUJA EL PUNTO YA TRANSFORMADO
          puntos_transformados.push([...nv_punto])
          nv_punto=[]
        })
        //EMPUJA TODOS LOS PUNTOS TRANSFORMADOS AL ARREGLO GENERAL
        puntos.push([...puntos_transformados])
        puntos_transformados=[]

      }
      else if(item.transformacion=='trasladar'){
        //POR CADA UNO DE LOS PUNTOS TRANSFORMADOS
        puntos.at(-1).forEach(function(item2){
          let nv_punto=[]
          //POR CADA COORDENADA
          item2.forEach(function(item3, index3){
            //VERIFICA SOBRE QUE EJE SE HACE EL TRASLADO
            if (item.eje=='x'){
              //SI ES SOBRE EL EJE X, SOLO ALTERA LA COORDENADA X
              if (index3==0){
                nv_punto.push(item3+item.unidades);
              }
              //TODOS LOS DEMAS, AÑADELOS ASI COMO ESTAN
              else{
                nv_punto.push(item3)
              }
            }
            else if (item.eje=='y'){
              //SI ES SOBRE EL EJE Y, SOLO ALTERA LA COORDENADA Y
              if (index3==1){
                nv_punto.push(item3+item.unidades);
              }
              //TODOS LOS DEMAS, AÑADELOS ASI COMO ESTAN
              else{
                nv_punto.push(item3)
              }
            }
            else if (item.eje=='z'){
              //SI ES SOBRE EL EJE Z, SOLO ALTERA LA COORDENADA Z
              if (index3==2){
                nv_punto.push(item3+item.unidades);
              }
              //TODOS LOS DEMAS, AÑADELOS ASI COMO ESTAN
              else{
                nv_punto.push(item3)
              }
            }
          })
          //EMPUJA EL PUNTO YA TRANSFORMADO
          puntos_transformados.push([...nv_punto])
          nv_punto=[]
        })
        //EMPUJA TODOS LOS PUNTOS TRANSFORMADOS AL ARREGLO GENERAL
        puntos.push([...puntos_transformados])
        puntos_transformados=[]
      }
      else if(item.transformacion=='rotar'){
        let angulo_rad = item.alpha*((Math.PI)/180);
        //POR CADA UNO DE LOS PUNTOS ROTADOS
        puntos.at(-1).forEach(function(item2){
          let nv_punto=[]
          //POR CADA COORDENADA
          item2.forEach(function(item3, index3){
            //VERIFICA SOBRE QUE EJE SE HACE LA ROTACION 
            if (item.eje=='x'){
              //SI ES SOBRE EL EJE X, NO LO ALTERES
              if (index3==0){
                nv_punto.push(item3);
              }
              //TODOS LOS DEMAS, ALTERALOS CONFORME A LA FORMULA
              else if (index3==1){
                //y cos α - z sin α
                let transformacion_x_p_y = (item2[1]*(Math.cos(angulo_rad)))-(item2[2]*(Math.sin(angulo_rad)));
                nv_punto.push(transformacion_x_p_y);
              }
              else if (index3==2){
                //y sin α + z cos α
                let transformacion_x_p_z = (item2[1]*(Math.sin(angulo_rad)))+(item2[2]*(Math.cos(angulo_rad)));
                nv_punto.push(transformacion_x_p_z);
              }
            }
            else if (item.eje=='y'){
              //SI ES SOBRE EL EJE Y, SOLO ALTERA LA COORDENADA Y
              if (index3==1){
                nv_punto.push(item3);
              }
              //TODOS LOS DEMAS, ALTERALOS CONFORME A LA FORMULA
              else if (index3==0){
                //z sin α + x cos α
                let transformacion_y_p_x = (item2[2]*(Math.sin(angulo_rad)))+(item2[0]*(Math.cos(angulo_rad)));
                nv_punto.push(transformacion_y_p_x);
              }
              else if (index3==2){
                //z cos α - x sin α
                let transformacion_y_p_z = (item2[2]*(Math.cos(angulo_rad)))-(item2[0]*(Math.sin(angulo_rad)));
                nv_punto.push(transformacion_y_p_z);
              }
            }
            else if (item.eje=='z'){
              //SI ES SOBRE EL EJE Z, SOLO ALTERA LA COORDENADA Z
              if (index3==2){
                nv_punto.push(item3);
              }
              //TODOS LOS DEMAS, ALTERALOS CONFORME A LA FORMULA
              else if (index3==0){
                //x cos α - y sin α
                let transformacion_z_p_x = (item2[0]*(Math.cos(angulo_rad)))-(item2[1]*(Math.sin(angulo_rad)));
                nv_punto.push(transformacion_z_p_x);
              }
              else if (index3==1){
                //x sin α + y cos α
                let transformacion_z_p_y = (item2[0]*(Math.sin(angulo_rad)))+(item2[1]*(Math.cos(angulo_rad)));
                nv_punto.push(transformacion_z_p_y);
              }              
            }
          })
          //EMPUJA EL PUNTO YA TRANSFORMADO
          puntos_transformados.push([...nv_punto])
          nv_punto=[]
        })
        //EMPUJA TODOS LOS PUNTOS TRANSFORMADOS AL ARREGLO GENERAL
        puntos.push([...puntos_transformados])
        puntos_transformados=[]
      }
    })
    let retorno= {
      puntos:puntos,
      show_plots:false,
      id_plots: []
    }
    //POR CADA UNA DE LAS MATRICES DE PUNTOS  
    puntos.forEach(function(item, index){
      retorno.id_plots.push("id_".concat(index))
      /*
      let coord_x = []
      let coord_y = []
      let coord_z = []
      item.forEach(function(coords){
        coord_x.push(coords[0])
        coord_y.push(coords[1])
        coord_z.push(coords[2])
      })
      console.log(coord_x)
      console.log(coord_y)
      console.log(coord_z)
      let plot = Plotly.newPlot("id_".concat(index), [{
        type: 'scatter3d',
        mode: 'lines',
        x: coord_x,
        y: coord_y,
        z: coord_z,
        opacity: 0.7,
        line: {
          width: 10,
          colorscale: 'Viridis'}
       }]);
       retorno.plots.push(plot)*/
    })
    return retorno;
  },
  //LISTA QUR CONTIENE TODOS LOS PUNTOS
  haz_plots(state){
    let puntos=state.puntos
    let retorno = {
      plots:[]
    }
    puntos.forEach(function(item, index){
      let coord_x = []
      let coord_y = []
      let coord_z = []
      //ITERA SOBRE CADA UNA DE LAS ARISTAS
      state.rectas.forEach(function(coords){
        coord_x.push(item[coords[0]][0])
        coord_y.push(item[coords[0]][1])
        coord_z.push(item[coords[0]][2])
        coord_x.push(item[coords[1]][0])
        coord_y.push(item[coords[1]][1])
        coord_z.push(item[coords[1]][2])
      })
      let plot = Plotly.newPlot("id_".concat(index), [{
        type: 'scatter3d',
        mode: 'lines',
        x: coord_x,
        y: coord_y,
        z: coord_z,
        opacity: 0.7,
        line: {
          width: 10,
          colorscale: 'Viridis'}
       }]);
       retorno.plots.push(plot)
    })
  }

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
