<template>
  <div class="navbar">
    <router-link to="/producto/ingresar" class="nav-link">Ingresar Producto</router-link>
    <router-link to="/venta/realizar" class="nav-link">Realizar Venta</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #007bff;
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e9ecef;
  border-color: #007bff;
  color: #0056b3;
}
</style>
