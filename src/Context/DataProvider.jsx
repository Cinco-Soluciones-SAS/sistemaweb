import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();


export const DataProvider = (props) =>{

    const [listaProductos,setLista] = useState([]);
    const [carritoCompras,setCarrito] = useState([]);
    const [compra,setCompra]=useState(0);

    useEffect(() =>{
        setLista(listaProductos)
    },[listaProductos])

    useEffect(() =>{
        setCarrito(carritoCompras)
    },[carritoCompras])

    useEffect(() =>{
        setCompra(compra)
    },[compra])

    const value = {
        listaProductos: listaProductos,
        setLista: setLista,
        carritoCompras:carritoCompras,
        setCarrito:setCarrito,
        compra:compra,
        setCompra:setCompra
    }

    return(
        <>
            <DataContext.Provider value={value}>
                {props.children}
            </DataContext.Provider>
        </>
    )
}
