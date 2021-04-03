<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Вход в аккаунт
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="signIn">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required 
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Email"
                                v-model="email"
                                @blur="() => { if (email === null) email = ''; email.trim() }">
                        <p v-if="email === ''" class="text-red-500">{{errorMessages.required}}</p>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Пароль</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required 
                               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                               placeholder="Password"
                               v-model="password"
                               @blur="() => { if (password === null) password = ''; password.trim() }">
                        <p v-if="password === ''" class="text-red-500">{{errorMessages.required}}</p>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" v-model="rememberMe" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                        Запомнить меня
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Забыли пароль?
                        </a>
                    </div>
                </div>

                <div>
                    <button type="submit" 
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="!valid">
                    Войти
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import Cookie from "../services/Cookie";

export default {
    data() {
        return {
            email: null,
            password: null,
            rememberMe: false,
            errorMessages: {
                required: "Поле обязательно для заполнения"
            }
        }
    },
    computed: {
        valid() {
            return this.email && this.password;
        }
    },
    methods: {
        signIn() {
            Cookie.setCookie('token', 'randomToken');
            this.$router.push('/');
        }
    }
}
</script>
