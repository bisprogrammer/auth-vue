<template>
  <div class="home">
    <div class="h-screen bg-gray-300">
      <div class="container flex justify-center py-20">
          <div class="p-3 bg-white rounded-xl max-w-lg hover:shadow">
              <div class="flex justify-between w-full"> <img src="https://i.imgur.com/CeVfZyY.jpg" width="150" class="rounded-lg">
                  <div class="ml-2">
                      <div class="p-3">
                          <h3 class="text-2xl">Elliot Thombson</h3> <span>Associate developer</span>
                      </div>
                      <p><a href="mailto:test@mail.ru">test@mail.ru</a></p>
                      <p><a href="tel:89992569584">89992569584</a></p>
                  </div>
              </div>
              <div class="flex justify-between items-center mt-2 gap-2"> 
                <button class="w-full h-12 rounded-md border-2 text-md hover:shadow hover:bg-red-700 hover:border-red-700 hover:text-white"
                    @click="signOut()">Выйти</button> 
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import Cookie from "../services/Cookie";

export default {
  name: 'Home',
  methods: {
    signOut() {
      Cookie.deleteCookie("token");
      this.$router.push("/login");
    }
  }
}
</script>
