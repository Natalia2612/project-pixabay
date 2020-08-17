import React, { Component } from 'react'

class Buscador extends Component{
    busquedaRef = React.createRef();
    obtenerDatos = (e) =>{
        e.preventDefault();
        const termino=this.busquedaRef.current.value; //Tomamos el valor del input 
        
        this.props.datosBusqueda(termino);//lo envia al componente principal
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo Futobol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" placeholder="Busca tu imagen. Ejemplo Futobol"/>
                    </div>
                </div>
            </form>
        );
    }
}
export default Buscador;