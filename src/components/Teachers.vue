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
                        <th>Code</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Date of Birth</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in students" v-bind:key="student">
                        <td>{{student.code}}</td>
                        <td>{{student.name}}</td>
                        <td>{{student.lastName}}</td>
                        <td>{{student.dateOfBirth}}</td>
                        <td class="center"><a href="#!"><i class="material-icons">edit</i></a></td>
                        <td class="center"><a href="#!"><i class="material-icons">delete</i></a></td>
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
                

            }
        }
    }
</script>

<style scoped>

</style>
  