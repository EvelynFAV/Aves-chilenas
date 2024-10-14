import React, { useContext } from "react";
import { AveContext } from "./AveProvider";
import './ListaAves.css'

function ListaAves() {
    const { aves, barraBusqueda } = useContext(AveContext);
    const filtrarAves = aves.filter((ave) =>
        ave.name.spanish.toLowerCase().includes(barraBusqueda.toLowerCase()));

    return (
        <div className="contenedor-aves">
            {filtrarAves.map((ave) => (
                <div key={ave.name.spanish} className="ave-card">
                    <img src={ave.images.main} alt={ave.name.spanish} />
                    <p><strong> Nombre en latín: </strong> {ave.name.latin}</p>
                    <p><strong>Nombre en español:</strong> {ave.name.latin} </p>
                </div>
            ))}
        </div>
    );
}
export default ListaAves