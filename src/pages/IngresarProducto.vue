<template>
  <div class="container">
    <div class="formulario">
      <header>Ingresar Producto</header>
      <section>
        <form class="form">
          <p type="Código de Barras">
            <input v-model="codigoBarras" type="text" required />
          </p>
          <p type="Nombre">
            <input v-model="nombre" type="text" required />
          </p>
          <p type="Categoría">
            <input v-model="categoria" type="text" required />
          </p>
          <p type="Stock">
            <input v-model="stock" type="number" required />
          </p>
          <p type="Precio Unitario">
            <input v-model="precio" type="number" required />
          </p>
          <div class="botonCrear">
            <button type="button" v-on:click="crearProducto">Ingresar</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { guardarProductoFachada } from "../assets/clients/cliente";

export default {
  data() {
    return {
      codigoBarras: '',
      nombre: '',
      categoria: '',
      stock: '',
      precio: ''
    };
  },
  methods: {
    async crearProducto() {
      const productoBody = {
        codigoBarras: this.codigoBarras,
        nombre: this.nombre,
        categoria: this.categoria,
        stock: this.stock,
        precio: this.precio
      };
      const data = await guardarProductoFachada(productoBody);
      alert("Producto ingresado con exito");
      console.log(data);
    }
  }
};
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
  width: 300px;
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
}
.botonCrear {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 25px;
  padding: 12px;
}
</style>
