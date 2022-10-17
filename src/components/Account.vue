<template>
    <div class="row">
        <div class="col s12">
            <br>

            <!-- Header -->
            <div class="border pb row">
                <div class="title col s11 valign-wraper">
                    <h3>Account information</h3>
                </div>
                <div class="col m1">
                    <p class="blue-text text-darken-1 center-align">Edit</p>
                </div>
            </div>

            <!-- Personal information -->
            <div class="property_container row">
                <div class="label col s2 valign-wrapper">
                    <label>Name: </label>
                </div>
                <div class="col s10">
                    <p>{{user.username}}</p>
                    <!-- <input type="text" v-modal="username"> -->
                </div>

                <div class="label col s2 valign-wrapper">
                    <label>Document type: </label>
                </div>
                <div class="col s10">
                    <p>{{user.tipe_document}}</p>
                </div>
                
                <div class="label col s2 valign-wrapper">
                    <label>Document number: </label>
                </div>
                <div class="col s10">
                    <p>{{user.document}}</p>
                </div>

                <div class="label col s2 valign-wrapper">
                    <label>E-mail: </label>
                </div>
                <div class="col s10">
                    <p>{{user.email}}</p>
                </div>

                <div class="label col s2 valign-wrapper">
                    <label>Phone: </label>
                </div>
                <div class="col s10">
                    <p>{{user.phone}}</p>
                </div>
            </div>
            <div class="border row"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-account',
        data() {
            return {
                user: {
                    _id: "634a198c4dc0b058761d4235",
                    username: "Juan",
                    passWord: "$2b$10$BF.BW1V/5zLFwB/zm5Jt0OF15qofFtwi8RL5Zgaj48BzeGV89U/K2",
                    name: "Juan Camilo Perez Perez",
                    tipe_document: "6341b482ee0c46a68e80febc",
                    document: 1040408561,
                    email: "juan.perez@gmail.com",
                    phone: 3112365250,
                    rol: "6341b4f9ee0c46a68e80fec0",
                    createAt: "2022-10-10T22:45:39.498Z",
                    updateAt: "2022-10-10T22:45:39.498Z",
                    active: true,
                    verify: true,
                    __v: 0
                }

            }
        }
    }
</script>

<style scoped>
.border {
    border-bottom: 2px solid #3d5afe96;
}
.pb {
    padding-bottom: 15px;
}
.title {
    height: 60px;
}
.title h3 {
    margin: 0;
    font-weight: 500;
    color: #3d5afe;
}

.property_container {
    /* border: 2px solid rgba(61, 90, 254, 0.2); */
    font-weight: 500;
}

.label {
    height: 50px;
}
</style>
  