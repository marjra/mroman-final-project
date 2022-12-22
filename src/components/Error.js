import React from 'react';
const Error = ({mensaje}) => {
    return ( 
        <p className="my-3 text-center text-red alert alert-primary">
            {mensaje}
        </p>
     );
}
 
export default Error;