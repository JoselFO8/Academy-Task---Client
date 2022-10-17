<template>
  <!-- Nav bar -->
  
  <nav>
    <div class="nav-wrapper indigo accent-2">
      <!-- <ul class="rigth hide-on-med-and-down"> -->
      <a href="#" class="brand-logo">
        <div class="image">
          <img src="../src/assets/Slogan/academy.png" alt="Slogan academic">
        </div>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Login</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Account'}">Account</router-link>
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

  <!-- router-view -->
  <div class="container white">
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
.image {
  height: 60px;
  margin-left: 30px;
} 
.image img {
  height: 100%;
}
</style>
