<template>
    <div class="row">
        <div class="col m12 card-panel">
            <form>
                <div class="row">
                    <div class="col m3">
                        <label>User</label>
                        <input type="text" v-model="usuario">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <label>Password</label>
                        <input type="password" v-model="clave">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <button type="submit" class="btn indigo accent-2">Login</button>
                        <div class="progress">
                            <div class="determinate indigo accent-2"></div>
                        </div>
                    

                    <!-- <div class="preloader-wrapper active">
                        <div class="spinner-layer spinner-red-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div> -->


                        </div>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
name: 'app-login',
data() {
    return {
        mesage: "Login",
    }
}
}
</script>

<style scoped>

</style>
  