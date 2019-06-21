<template>
    <div class="login">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button @click="doLogin()">login</button>
        <br>
        {{ error }}
    </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        error() {
            return this.$store.state.data.error
        }
    },
    methods: {
        doLogin() {
            const payload = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('prosesLogin', payload)
            if (this.$store.state.data.error == '') {
                this.$router.push('/')
            } else {
                return false
            }
        }  
    },
    mixins: [checkLogin]
}
</script>