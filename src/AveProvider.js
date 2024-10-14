import React, { createContext,useState, useEffect} from "react";

const AveContext = createContext();

const AveProvider = ({children}) => {
    const [aves, setAves] = useState([]);
    const [barraBusqueda, setBarraBusqueda]= useState("");

    const metodoFetch = async ()=> {
        try {
            const respuesta = await fetch('https://aves.ninjas.cl/api/birds');
            const resultado = await respuesta.json();
            setAves(resultado);
        }catch {
            console.log("Error en procesamiento de Fetch");
        }
    }
    useEffect(()=>{
        metodoFetch()
    }, []);
    return (
        <AveContext.Provider value ={{aves, barraBusqueda, setBarraBusqueda}}>
            {children}
        </AveContext.Provider>
    );
};
export { AveContext, AveProvider}