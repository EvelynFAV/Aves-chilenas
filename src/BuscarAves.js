import { useContext } from "react";
import { AveContext } from "./AveProvider";
import './BuscarAves.css'

function BuscarAves() {
    const { barraBusqueda, setBarraBusqueda } = useContext(AveContext)
    const busquedaUsuario = (event) => {
        setBarraBusqueda(event.target.value.toLowerCase());
    };

    return (
        <>
            <h1>Aves de Chile </h1>
            <div className="informacion">
                <p>A continuación podrás encontrar fotos de las diversas especies de aves que existen en Chile. Puedes visualizarlas todas, o puedes buscar el nombre de algún ave en especial en la barra de búsqueda.</p>
            </div>
            <div className="barra-de-búsqueda">
                <input
                    type='text'
                    id='buscador'
                    placeholder="Busque el Ave aquí"
                    value={barraBusqueda}
                    onChange={busquedaUsuario}
                />
            </div>
        </>
    )
}
export default BuscarAves