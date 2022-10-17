<template>
    <div class="row">
        <div class="col s3">
            <a href="#!">
                <div class="create">
                    <p>+</p>
                    <p>Create</p>
                </div>
            </a>
        </div>
        <div class="col s3">
            <p>Prueba</p>
        </div>
        <div class="col s3">
            <p>Prueba</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-task',
    data() {
        return {
            mesage: "Task",
        }
    }
}
</script>

<style scoped>
.create {
    background-color: #536dfe;
    height: 53px;
    width: 130px;
    border-radius: 30px;
    box-shadow: 1px 1px 7px 0.5px rgba(85, 76, 76, 0.7);
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
}
.create i {
  background-color: grey;  
}

.create p {
    margin: 0;
    color: rgb(255, 255, 255, 0.8);
    font-size: 18px;
}
</style>
  