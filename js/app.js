var app = new Vue({
    el: '#app',
    data: {
      valorContador:0,
      potencia:"",
      cantidadClick:0,
      

    },
    methods: {
      sumar(){
        this.cantidadClick= this.cantidadClick + 1;
        this.valorContador=this.valorContador+1;
        
      },
      restar(){
        this.cantidadClick=this.cantidadClick+1
        if(this.valorContador>0)this.valorContador=this.valorContador-1
          
        
        
      }
    },

    computed:{
           potenciar(){
             return this.valorContador* this.valorContador
           }
    }

  })