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
                    <a href="#!" @click="openModal">
                        <div class="framework">
                            <p class="white-text center-align"><i class="material-icons">edit</i></p>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Personal information -->
            <div class="property_container row">

                <div class="row">
                    <div class="label col s2 valign-wrapper">
                        <label>Name: </label>
                    </div>
                    <div class="col s10">
                        <p>{{user.username}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="label col s2 valign-wrapper">
                        <label>Document type: </label>
                    </div>
                    <div class="col s10">
                        <p>{{user.tipe_document}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="label col s2 valign-wrapper">
                        <label>Document number: </label>
                    </div>
                    <div class="col s10">
                        <p>{{user.document}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="label col s2 valign-wrapper">
                        <label>E-mail: </label>
                    </div>
                    <div class="col s10">
                        <p>{{user.email}}</p>
                    </div>
                </div>
                <div class="row">
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
    </div>

    <!-- Modal - Edit information -->
    <div class="modal" id="update-modal">
        <div class="modal-content">
            <div class="row">

                <!-- Head -->
                <div class="col s12">
                    <div class="row">
                        <div class="col s12 center-align">
                            <img src="../assets/Slogan/academy.png" alt="Slogan academic">
                        </div>
                    </div>
                    <div class="row">
                        <div class="mtitle col s12 indigo blue lighten-3 valign-wraper">
                            <h4>Update information</h4>
                        </div>
                    </div>
                </div>

                <!-- Inputs -->
                <div class="row">
                    <div class="col s12 m12">
                        <input type="text" placeholder="Name" v-model="rName">
                        <span class="helper-text"></span>
                    </div>
                    <div class="col s12 m6">
                        <input type="text" placeholder="Email" v-model="rEmail">
                        <span class="helper-text"></span>
                    </div>
                    <div class="col s12 m6">
                        <input type="text" placeholder="Phone" v-model="rPhone">
                        <span class="helper-text"></span>
                    </div>
                    <div class="col s12 m6">
                        <div class="input-field" id="select-document_type">
                            <select v-model="rTipe_document">
                                <option value="" disabled selected>Choose your document type</option>
                                <option value="6341b482ee0c46a68e80febc">Citizenship card</option>
                                <option value="6341b494ee0c46a68e80febd">Identity card</option>
                                <option value="6341b4cfee0c46a68e80febe">Passport</option>
                                <option value="6341b4e0ee0c46a68e80febf">Foreign ID</option>
                            </select>
                        </div>
                    </div>
                    <div class="height_adjustment col s12 m6">
                        <input type="text" placeholder="Document number" v-model="rdocument">
                        <span class="helper-text"></span>
                    </div>
                </div>

                <!-- Send -->
                <div class="row center-align">
                    <button class="btn indigo blue lighten-3">
                        <div class="valign-wrapper">
                            <span class="mr">Send</span>
                            <i class="material-icons">send</i>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import M from "materialize-css"

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
                },
                rName: '',
                rEmail: '',
                rPhone: '',
                rTipe_document: '',
                rdocument: '',
                
                modales: [],
            }
        },
        mounted() {
            var elems = document.querySelectorAll('.modal');
            this.modales = M.Modal.init(elems, null);

            var select = document.querySelectorAll('select');
            M.FormSelect.init(select);
        },
        methods: {
            openModal () {
                var modal_update = M.Modal.getInstance(document.querySelector('#update-modal'));
                modal_update.open();

                this.rName = this.user.username
                this.rEmail = this.user.email
                this.rPhone = this.user.phone
                this.rdocument = this.user.document
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
.mtitle {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mtitle h4 {
    margin: 0;
    color: #ffffffe6;
}

.property_container {
    font-weight: 500;
}

.label {
    height: 50px;
}
.framework {
    background-color: #3d5afe;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
.height_adjustment {
    padding-top: 15px;
    margin-bottom: 7px;
}
.mr {
    margin-right: 8px;
}
</style>
  