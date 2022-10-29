import { Inicio } from "./components/Inicio/Inicio";
import { AddProducto } from "./components/AddProducto/AddProducto";
import { Route, Routes } from "react-router-dom";
import { ListaProducto } from "./components/ListaProducto/ListaProducto";
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras";
export const Ruteos = () =>{

    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/productos" element={<ListaProducto/>}></Route>
            <Route path="/carrito" element={<CarritoCompras/>}></Route>
        </Routes>
    )

}