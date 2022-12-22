import React from 'react';
import Imagen from './Imagen';
const Listadoimagenes = ({imagenes}) => {
    return ( 
        <div className="col-12 p-4 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 
export default Listadoimagenes;