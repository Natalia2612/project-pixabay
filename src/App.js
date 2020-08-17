import React, { Component } from 'react'
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';


class App extends Component{

  state = {
    termino:'',
    imagenes:[],
    pagina:''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () =>{
     let pagina = this.state.pagina;//Leer el state de la pagina actual
     
     if(pagina === 1) return null; //Si la pagina es 1, ya no ir atras

     pagina-=1; //Restar 1 a la pagina actual

     this.setState({pagina}, () => {
       this.consultarApi();
       this.scroll();
     }); //Agregar el cambio al state

     //console.log(pagina);
  }

  paginaSiguiente = () =>{
      let pagina = this.state.pagina;//Leer el state de la pagina actual

      pagina+=1; //Sumar 1 a la pagina actual

      this.setState({pagina},()=>{
        this.consultarApi();
        this.scroll();
      }); //Agregar el cambio al state

      //console.log(pagina);
  }

  consultarApi = () => {
    const termino=this.state.termino;
    const pagina= this.state.pagina;
    const url = `https://pixabay.com/api/?key=17796936-96c7b02f40aa4227bbff964b8&q=${termino}&per_page=30&page=${pagina}`;
    
    console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes:resultado.hits}));
  }
  datosBusqueda = (termino) => {
    //console.log(termino);
    this.setState({
        termino:termino, 
        pagina:1
      },()=>{
        this.consultarApi();
      })
  }

  render(){
    return(
      <div className=" app container">
       <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}/>
       </div>

       <div className="row justify-content-center">
          <Resultado 
                    imagenes={this.state.imagenes}
                    paginaAnterior={this.paginaAnterior}
                    paginaSiguiente={this.paginaSiguiente}
          />
       </div>
    </div>
    );
  }
} 

export default App;
