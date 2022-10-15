<template>
  <nav>
    <div class="nav-wrapper indigo accent-2">
      <ul class="rigth hide-on-med-and-down">
        <li>
          <router-link to="/Login">Login</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Students'}">Students</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Task'}">Task</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Teachers'}">Teachers</router-link>
        </li>
      </ul>
    </div>
  </nav>

  
  <div class="container white">
    <h1>View:</h1>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
