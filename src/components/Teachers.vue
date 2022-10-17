<template>
    <div>Students</div>
    <div class="row">
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
                <!-- Unrated
                No observations -->
                <tbody>
                    <tr v-for="task in tasks" v-bind:key="task">
                        <td>{{task.studentId}}</td>
                        <td>{{task.name}}</td>
                        <td>{{task.description}}</td>
                        <td>{{task.solution}}</td>
                        <td>{{!task.calification ? 'Unrated' : task.calification}}</td>
                        <td>{{!task.observations ? 'No observations' : task.observations}}</td>
                        <td class="center"><a href="#!"><i class="material-icons">rate</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>
  