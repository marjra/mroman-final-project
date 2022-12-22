import React,{useState} from 'react';
import Error from './Error';
const Formulario = ({guardarBusqueda}) => {

    const [termino,guardarTermino] = useState('');
    const [error,guardarError] = useState(false);
    const buscarImagenes = e =>{
        e.preventDefault();
        
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        
        guardarBusqueda(termino)

    }
    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Introduzca un tema de interés..."
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-3">
                    <input
                        type="submit"
                        className="btn btn-lg btn-info btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error  ? <Error mensaje="Oh... No ha habido suerte! Inténtalo de nuevo" /> : null}
        </form>
     );
}


 
export default Formulario;