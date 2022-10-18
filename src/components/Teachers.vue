<template>
    <div class="row">
        <br>
        
        <!-- Header -->
        <div class="border pb row">
            <div class="title col s12 valign-wraper">
                <h3>Assigned tasks</h3>
            </div>
        </div>
        <!-- Table of task by student -->
        <div class="col m12">
            <div class="progress indigo accent-2" v-show="isLoading">
                <div class="indeterminate white"></div>
            </div>
        
            <table class="table bordered striped" v-show="!isLoading">
                <thead>
                    <tr>
                        <th>Code student</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Solution</th>
                        <th>Calification</th>
                        <th>Observations</th>
                        <th colspan="1"></th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr v-for="task in tasks" v-bind:key="task">
                        <td>{{task.studentId}}</td>
                        <td>{{task.name}}</td>
                        <td>{{task.description}}</td>
                        <td>{{task.solution}}</td>
                        <td>{{!task.calification ? 'Unrated' : task.calification}}</td>
                        <td>{{!task.observations ? 'No observations' : task.observations}}</td>
                        <td v-show="!task.calification" class="center"><a href="#!" @click="openModal"><i class="material-icons">rate_review</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Border bottom -->
        <div class="border row"></div>

        <!-- Rate modal -->
        <div class="modal" id="rate-modal">
            <div class="modal-content">
                <div class="row">

                    <div class="col s12">
                        <div class="row">
                            <div class="col s12 center-align">
                                <img src="../assets/Slogan/academy.png" alt="Slogan academic">
                            </div>
                        </div>
                        <div class="row">
                            <div class="title col s12 indigo blue lighten-3 valign-wraper">
                                <h4>Rate</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s8 offset-s2">
                            <div class="input-field">
                                <select class="select">
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <label>Select rate</label>
                            </div>
                        </div>

                        <div class="textarea col s8 offset-s2">
                            <textarea cols="30" rows="10" placeholder="Write observations..." v-model="rObservations"></textarea>
                            <span class="helper-text"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 center-align">
                            <button class="btn indigo blue lighten-3">Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import M from "materialize-css"

    export default {
        name: 'app-teachers',
        data() {
            return {
                mesage: "Teachers",
                students: [
                    {
                        code: 'a13a2sdf3as2df1',
                        name: 'Juan',
                        lastName: 'Stephens',
                        dateOfBirth: '20-10-2000'
                    }
                ],
                rObservations: '',
                rates: [1,2,3,4,5,6,7,8,9,10],
                tasks: [
                    {
                        _id: "6341c94bbb849ec4de641433",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "Tarea Prueba",
                        description: "Esta es una Tarea de Prueba",
                        solution: "Esta es la Solucion de la Tarea de Prueba",
                        __v: 0,
                        calification: 10,
                        observations: "Estas son las observaciones de prueba"
                    },
                    {
                        _id: "6349d4884dc0b058761d421e",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "Prueba 2",
                        description: "Tarea de prueba 2",
                        solution: "Solucion prueba 2",
                        __v: 0,
                        calification: 8,
                        observations: "Falto prueba 2"
                    },
                    {
                        _id: "6349f1734dc0b058761d4221",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "string",
                        description: "string",
                        solution: "string",
                        __v: 0
                    },
                    {
                        _id: "6349f322f25bb3e3d585c942",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "matematica",
                        description: "algebra",
                        solution: "binomio cuadrado",
                        __v: 0
                    },
                    {
                        _id: "6349fbeff783ec1e44120dfa",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "tarea tarea",
                        description: "tarea",
                        solution: "solucion",
                        __v: 0
                    },
                    {
                        _id: "634a05f3f783ec1e44120e32",
                        studentId: "6348a5a5bcfefa761eabdc07",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "tarea 1",
                        description: "tareatearear",
                        solution: "solsolsols",
                        __v: 0
                    }
                ]
            }
        },
        mounted() {
            var elems = document.querySelectorAll('.modal');
            this.modales = M.Modal.init(elems, null);

            var select = document.querySelectorAll('.select');
            M.FormSelect.init(select);
        },
        methods: {
            openModal() {
            var modal_rate = M.Modal.getInstance(document.querySelector('#rate-modal'));
            modal_rate.open();
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
.title h3 {
    margin: 0;
    font-weight: 500;
    color: #3d5afe;
}
.title {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title h4 {
    margin: 0;
    color: #ffffffe6;
}

.textarea textarea {
    min-height: 100px;
}
</style>
  