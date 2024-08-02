import axios from "axios";

//metodos api
const guardarProducto= async (productoBody)=>{
    const data= await axios.post(`http://localhost:8081/API/v1.0/Facturacion/productos`, productoBody )
    .then(r=>r.data);
    console.log(data);
    return data;
}

const realizarVenta= async (ventaBody)=>{
    const data= await axios.post(`http://localhost:8081/API/v1.0/Facturacion/ventas/realizar`, ventaBody)
    .then(r=>r.data);
    console.log(data);
    return data;
}

const buscarProductoPorCodigo= async (codigoBarras)=>{
    const data = await axios.get(`http://localhost:8081/API/v1.0/Facturacion/productos/${codigoBarras}`)
    .then(r=>r.data);
    console.log(data);
    return data;
}

//metodos fachada

export const guardarProductoFachada = async (productoBody)=> {
    return await guardarProducto(productoBody);
}

export const realizarVentaFachada= async(ventaBody)=> {
    return await realizarVenta(ventaBody);
}

export const buscarProductoPorCodigoFachada= async (codigoBarras)=>{
    return await buscarProductoPorCodigo(codigoBarras);
}

