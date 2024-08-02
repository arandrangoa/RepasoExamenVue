<template>
  <div class="container">
    <div class="formulario">
        <header>Realizar Venta</header>
        <section>
            <div class="venta-info">
            <form class="form">
                <p type="Numero venta">
                    <input v-model="numeroVenta" type="text"/>
                </p>
                <p type="Cedula">
                    <input v-model="cedula" type="text"/>
                </p>
                <button type="button" v-on:click="crearVenta">GUARDAR</button>
            </form>
            </div>
            <div class="producto-info">
                <p type="Codigo Barras">
                    <input v-model="codigoBarrasProducto" type="text">
                </p>
                <p type="Cantidad">
                    <input v-model="cantidadProducto" type="text">
                </p>
                <button type="button" v-on:click="agregarProducto">Agregar</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>C.Barras</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(producto, index) in productos" :key="index">
                        <td>{{producto.codigoBarras}}</td>
                        <td>{{producto.nombre}}</td>
                        <td>{{producto.cantidad}}</td>
                        <td>{{producto.precio}}</td>
                        <td>{{producto.subtotal}}</td>
                    </tr>
                </tbody>
            </table>

            <div class="totalVenta">
                <p>Total: {{totalVenta}}</p>

            </div>

        </section>
    </div>
  </div>
</template>

<script>
import {realizarVentaFachada, buscarProductoPorCodigoFachada} from "../assets/clients/cliente";

export default {
    data(){
        return{
            numeroVenta:'',
            cedula:'',
            codigoBarrasProducto:'',
            cantidadProducto:'',
            productos:[],
            totalVenta:0,
        };
    },
    methods:{
        async agregarProducto(){
            try{
                const producto= await buscarProductoPorCodigoFachada(this.codigoBarrasProducto);

                const cantidad=parseInt(this.cantidadProducto)

                if(cantidad> producto.stock){
                    alert("Stock no disponible");
                }

                const subtotal=cantidad*producto.precio;

                this.productos.push({
                    codigoBarras:producto.codigoBarras,
                    nombre:producto.nombre,
                    cantidad:cantidad,
                    precio:producto.precio,
                    subtotal:subtotal
                });

                this.totalVenta=this.totalVenta+subtotal;
                this.codigoBarrasProducto='';
                this.cantidadProducto='';

            } catch(error){
                alert("Error al agregar el producto");
            }
        },

        async crearVenta(){
            const ventaBody={
                numeroVenta:this.numeroVenta,
                cedula:this.cedula,
                productos:this.productos.map(
                    producto=>({
                        codigoBarras:producto.codigoBarras,
                        cantidad:producto.cantidad
                    })
                ),
                totalVenta:this.totalVenta
            };
            try {
                const data= await realizarVentaFachada(ventaBody);
                alert("Venta realizada con exito");
                this.resetFormulario();
                
            } catch (error) {
                alert("Error al realizar la venta");
            }
        },

        resetFormulario(){
            this.numeroVenta='';
            this.cedula='';
            this.productos='';
            this.totalVenta=0;
        }
    }

}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  background-color: rgb(212, 235, 255);
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}
header {
  color: black;
  font-size: 35px;
  background: rgba(140, 140, 140, 0.53);
}
input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}
.form {
  width: 600px;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 25px 35px;
  margin: 25px;
  box-shadow: 0px 0px 30px 5px #000;
}
button {
  width: 100px;
  padding: 10px 20px;
  background-color: #78788c;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  margin: 10px;
}
.venta-info, .producto-info {
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
table, th, td {
  border: 1px solid black;
}
th, td {
  padding: 8px;
  text-align: left;
}
.total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
