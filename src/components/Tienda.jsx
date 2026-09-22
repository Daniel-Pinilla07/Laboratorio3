import React, { useEffect, useState } from 'react'
import './styles.css'

export const Tienda = () => {
    //Variable de estado para guardar los productos
    const [productos, setProductos] = useState([]);
    // Llamamos la API con el hook useEffect
    useEffect(() => {
        //Utilizamos promesas
        async function obtenerProductos() {
            const response = await fetch('https://fakestoreapi.com/products?limit=10&offset=0');
            //Creo una constante para guardar los datos
            const data = await response.json();
            //Guardar resultados en la variable productos
            setProductos(data);
        }
        //Ejecutar la funcion
        obtenerProductos();
    }, []) //Esto me garantiza una ejecución

    return (
        <div className="container tienda-contenedor">
            <h1 className="tienda-titulo text-center">Nuestra Tienda</h1>
            <div className="row">
                {
                    productos.map((prod, index) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="card producto-card h-100">
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="producto-imagen card-img-top"
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title producto-nombre">
                                            <strong>Nombre: </strong>{prod.title}
                                        </h5>
                                        <p className="card-text producto-descripcion">
                                            <strong>Descripción: </strong>{prod.description}
                                        </p>
                                        <p className="producto-precio mt-auto">
                                            <strong>Precio: </strong>${prod.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        <h2>Gracias por visitar nuestra tienda<br />by Daniel Pinilla</h2></div>
    )
}

export default Tienda
