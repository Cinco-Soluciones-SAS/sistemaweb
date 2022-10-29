import { useContext } from "react"
import { DataContext } from "../../Context/DataProvider";
import Table from 'react-bootstrap/Table';


export const ListaProducto = () =>{
    const provider = useContext(DataContext);
    console.log(provider.listaProductos)

    const adicionarProductoCarrito = (producto) =>{
        provider.setCarrito([...provider.carritoCompras,producto]);
    }
    return(
        <div>
             <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Valor</th>
          <th>Imagen</th>
          <th>Añadir Carrito</th>

        </tr>
      </thead>
      <tbody>
        
            {
                provider.listaProductos.map((object,index)=>{
                    
                        return <tr>
                        <td>{object.nombre}</td>
                        <td>{object.descripcion}</td>
                        <td>{object.valor}</td>
                        <td>{object.imagen}</td>
                        <td><button onClick={()=>{
                            adicionarProductoCarrito(object)
                        }}className="btn btn-primary">+</button></td>
                    </tr>
                        

                })
            }
        
      </tbody>
    </Table>
        </div>
    )
}