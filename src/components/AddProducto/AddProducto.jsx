import './AddProducto.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import { useContext } from 'react';



export const AddProducto = () => {
    const[producto,setProducto] = useState('');
    const[descripcion,setDescripcion] = useState('');
    const[valor,setValor] = useState('');
    const[imagen,setImagen] = useState('');
    const objeto ={
        nombre:producto,
        descripcion:descripcion,
        valor:valor,
        imagen:imagen
    }
    const provider = useContext(DataContext);
    console.log(provider.listaProductos)

    const adicionarProducto = (producto) =>{
        console.log(producto);
        provider.setLista([...provider.listaProductos,producto]);
        
    }

    const handleProducto =(event) =>{
        console.log(event.target.value)
        setProducto(event.target.value);

    }
    const handleDescripcion =(event) =>{
        console.log(event.target.value)
        setDescripcion(event.target.value);

    }

    const handleValor =(event) =>{
        console.log(event.target.value)
        setValor(event.target.value);

    }
    const handleImagen =(event) =>{
        console.log(event.target.value)
        setImagen(event.target.value);

    }


    

    return(
        
        <div className='container text-align-left'>
            <div className='row'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Nombre producto</Form.Label>
                        <Form.Control onChange={handleProducto} type="text" placeholder="Por favor coloque el nombre del producto"  name="nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={handleDescripcion} type="text" placeholder="Por favor coloque el nombre del producto" name='descripcion'  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control onChange={handleValor} type="text" placeholder="Por favor coloque el nombre del producto" name='valor' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control onChange={handleImagen} type="text" placeholder="Por favor coloque el nombre del producto" name='imagen' />
                    </Form.Group>

                    
                    <Button onClick={() => {

                        adicionarProducto(objeto);
                    }} variant="primary">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

}