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
        
            <table class="responsive-table bordered striped" v-show="!isLoading">
                <thead>
                    <tr>
                        <th>Teacher code</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Solution</th>
                        <th>Calification</th>
                        <th>Observations</th>
                        <th colspan="1"></th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr v-for="task in tasks" v-bind:key="task">
                        <td>{{task.professorId}}</td>
                        <td>{{task.name}}</td>
                        <td>{{task.description}}</td>
                        <td>{{!task.solution ? 'No solution sent' : task.solution}}</td>
                        <td>{{!task.calification ? 'Unrated' : task.calification}}</td>
                        <td>{{!task.observations ? 'No observations' : task.observations}}</td>
                        <td v-show="!task.solution" class="center"><a href="#!" @click="openModal"><i class="material-icons">developer_board</i></a></td>
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
                        <div class="col s12">
                            <div class="input-field col s8 offset-s2">
                                <select>
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
                            <textarea cols="30" rows="10" placeholder="Write your answer here..." v-model="rSolution"></textarea>
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
        name: 'app-students',
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

                rSolution: '',
                tasks: [
                    {
                        _id: "6341c94bbb849ec4de641433",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "Tarea Prueba",
                        description: "Esta es una Tarea de Prueba",
                        solution: "",
                        __v: 0,
                        "calification": "",
                        "observations": "Estas son las observaciones de prueba"
                    },
                    {
                        _id: "6349d4884dc0b058761d421e",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6341c91bbb849ec4de641431",
                        name: "Prueba 2",
                        description: "Tarea de prueba 2",
                        solution: "Solucion prueba 2",
                        __v: 0,
                        "calification": 8,
                        "observations": "Falto prueba 2"
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
                        _id: "634a282dc1ee034781455e58",
                        studentId: "6341b90bfacec9ef21f6b02c",
                        professorId: "6349d1dfc1ee034781455cb4",
                        name: "First Task",
                        description: "¿What is your name?",
                        solution: "Andrés Felipe",
                        __v: 0
                    }
                ]
            }
        },
        mounted() {
            var elems = document.querySelectorAll('.modal');
            this.modales = M.Modal.init(elems, null);

            var select = document.querySelectorAll('select');
            M.FormSelect.init(select);


        },
        methods: {
            openModal() {
            var modal_rate = M.Modal.getInstance(document.querySelector('#rate-modal'));
            modal_rate.open();
            },

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
  