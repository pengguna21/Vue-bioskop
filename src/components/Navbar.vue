<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item" v-if="userActive === null">
                        <router-link to="/login" class="btn btn-success btn-fix">LOGIN</router-link>
                    </li>
                    <li class="nav-item" v-else>
                        <button @click="logout()" class="btn btn-danger btn-fix">LOGOUT</button>
                    </li>
                </ul> 
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        userActive() {
            return localStorage.getItem('dataUser')
        }  
    },
    methods: {
        logout() {
            localStorage.removeItem("dataUser")
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss" scoped>
    .navbar{
        background-color: white !important;
        margin-bottom: 50px;
    }

    .nav-item{
        margin-right: 10px;
        margin-left: 10px;
    }

    .nav-link{
        font-weight: 600;
    }

    .btn-fix{
        border-radius: 0;
        padding-right: 30px;
        padding-left: 30px;
    }
</style>