<template>
  <header class="flex justify-between items-center p-20 pb-5 pt-5" >
    <div class="logo">
      <img id="logoo" v-if="darkMode" src="../assets/image/logo-white.png">
      <img id="logoo" v-else src="../assets/image/Logo-dark.png">
      <!-- <img class="w-32" id="logoo" :class="{ 'invert-colors': darkMode }" src="../assets/image/Logo-dark.png" v-if="!show">
      <img class="w-32" id="logoo" :class="{ 'invert-colors': darkMode }" src="../assets/image/logo-white.png" v-else> -->
    </div>
    <nav>
      <ul id="nav_hearder" class="menu_pc flex gap-10">
        <li class="text-gray-500 text-xl font-bold"><RouterLink class="linkHeader" to="/">HOME</RouterLink> </li>
        <li class="text-gray-500 text-xl font-bold"><RouterLink class="linkHeader" to="/AboutMe">ABOUT ME</RouterLink></li>
        <li class="text-gray-500 text-xl font-bold"><RouterLink class="linkHeader" to="/PortFolio">PORTFOLIO</RouterLink></li>
        <li class="text-gray-500 text-xl font-bold"><RouterLink class="linkHeader" to="/ContactMe">CONTACT ME</RouterLink></li>
      </ul>
    </nav>
    <div class="dark-mod flex">
      <box-icon class="mr-4" :name="darkMode ? 'sun' : 'moon'" type="solid" animation="tada"  :color="darkMode ? '#fff' : '#7d7d7d'"  @click="toggleDarkMode" ></box-icon>
      <box-icon  name='menu-alt-right' class="mnMobile" animation='tada' :color="darkMode ? '#fff' : '#7d7d7d'" @click="toggleMenu" ></box-icon>
    </div>
    
  </header>

</template>
<style>
.linkHeader{
  padding: 10px;
  border-radius: 8px;
}
.dark .router-link-active{
  border: 1px solid white;
}
.router-link-active{
  border: 1px solid black;
}

</style>

<script >

export default {
  data() {
    return {
      darkMode: localStorage.getItem('darkMode') === 'true',
      isOpen: true,
    };
  },
  created() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true'); 
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false'); 
      }
      this.show = !this.show;
    },
    toggleMenu() {
      var nav =document.getElementById("nav_hearder")
      if(nav.classList.contains('menu_mobil')){
        nav.classList.remove('menu_mobil')
      }else {
        nav.classList.add('menu_mobil')
      }
    },
  },
};
</script>
<style>
.desktop-menu {
  display: none; /* Masquer la liste par défaut */
}

@media (min-width: 768px) {
  .desktop-menu {
    display: block; /* Afficher la liste lorsque la largeur de l'écran est supérieure à 768px (mode "desktop") */
  }
}
header {
  height: 100px;
}
.dark header{
  background-color: #191919;
}
.dark header nav ul li{
  color: white;
}
.logo{
  width: 8%;
}
</style>