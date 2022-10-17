<template>
  <!-- Nav bar -->
  <!-- <div class="row">
          <div class="col s12">
              <img src="../assets/Slogan/academy.png" alt="Slogan academic">
          </div>
      </div> -->
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

</style>
