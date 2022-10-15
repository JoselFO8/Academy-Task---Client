<template>
    <div>Students</div>
    <div class="row">
        <div class="col m12">
            <div class="progress indigo accent-2">
                <div class="indeterminate white"></div>
            </div>
        
            <table class="table bordered striped">
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
                    <tr>
                        <td>cod xsf21a3f2sadf</td>
                        <td>Juan</td>
                        <td>Stephens</td>
                        <td>12-08-2000</td>
                        <td class="center"><a href="#!"></a></td>
                        <td class="center"><a href="#!"></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
name: 'app-students',
data() {
    return {
        mesage: "Students",
    }
}
}
</script>

<style scoped>

</style>
  