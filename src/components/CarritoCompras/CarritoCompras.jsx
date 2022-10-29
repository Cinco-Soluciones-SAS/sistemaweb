import { useContext } from "react"
import { DataContext } from "../../Context/DataProvider"
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const CarritoCompras = () =>{
    var itemSubtotal = 0;
    const provider = useContext(DataContext);

    console.log(provider.carritoCompras);
    provider.carritoCompras.map((object,index)=>{
        var item = 0;
        
        item=itemSubtotal=itemSubtotal+Math.round(object.valor);
        console.log(item)
        provider.setCompra(item);

       
    })
    
    return(
        <div className="continer">
        <div className="row mt-2">
            <div className="col">
                <h1>Mi carrito de compras</h1>
            </div>
        </div>
        <div className="row">
            <div className="col 6">
            <div className="row">
            <div className="col-sm-12">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                      
                    </tr>
                </thead>
                <tbody>
                   {
                       provider.carritoCompras.map((object,index) => {
                            return <tr>
                                        <td>{index}</td>
                                        <td>{object.nombre}</td>
                                        <td>{object.valor}</td>
                                        <td><button className="btn btn-primary">+</button><button className="btn btn-danger">-</button><input className="form-control" type="text" value="1"></input></td>
                                        
                                    </tr>
                       }) 
                   }
                </tbody>
            </Table>
            </div>
        </div>
            </div>
            <div className="col 6">
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Resumen de compra</Card.Title>
                            <Card.Text>
                            <div className="col 6">
                                TOTAL:
                            </div>
                            <div className="col 6">
                                {provider.compra}
                            </div>
                            </Card.Text>
                            <Link to="/Checkout" className="btn btn-success">Pagar</Link>
                        </Card.Body>
                    </Card>
            </div>
        </div>


       </div>
    )
}