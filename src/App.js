import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Listadoimagenes from './components/Listadoimagenes';
import Navbar from './components/Navbar';
import './Styles/App.css';


function App() {
  const [busqueda,guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactua,guargarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalpaginas] = useState(1);
  

  useEffect(() => {
    const consultarAPI = async () => {
      if(busqueda === '') return;
        const imagenesPorPagina = 28;
        const key = '32188754-0db68f29c878bfcf76513f9b9';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactua}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarImagenes(resultado.hits);
        //calcular el total de paginas
        const calcularTotalPaingas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        guardarTotalpaginas(calcularTotalPaingas);

        //mover la pantalla al inicio
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior: 'smooth'});
    } 
    consultarAPI();
  },[busqueda,paginaactua])

  
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactua -1;
    if(nuevaPaginaActual === 0) return;
    guargarPaginaActual(nuevaPaginaActual);
  }
  

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactua +1;
    if(nuevaPaginaActual > totalpaginas) return;
    guargarPaginaActual(nuevaPaginaActual);
  }

  return (
    <>
    <Navbar />
    <div className='body bg-secondary'>
    <div className="container p-5">
      <div className="jumbotron">
        <p className="lead text-center display-6 m-2 p-3 font-weight-bold ">Buscador de Imágenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda} />
      </div>
      <div className='row justify-content-center'>
        <Listadoimagenes
          imagenes={imagenes} />
        {(paginaactua === 1) ? null : (
          <button
            type='button'
            className='btn btn-light col-2 mr-1'
            onClick={paginaAnterior}
          >&laquo; Anterior </button>
        )}

        {(paginaactua === totalpaginas ? null : (
          <button
            type='button'
            className='btn btn-light btn-block col-2'
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>

        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
