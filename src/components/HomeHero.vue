<template>
    <section id="homeHero" class="flex justify-between p-20 ">
        <div class="about_me" style="width: 50%;">
            <p class="text-9xl bg-cover bg-clip-text -webkit-background-clip text-transparent">
               <span class="text-stroke">HELLO, I'M RABIE. I'M A FULL-STACK WEB DEVELOPER</span> 
            </p>
        </div>
        <div class="my_photo overflow-hidden">
            <img class="mr-10" style="width: 97%; animation: spin 5s linear infinite;" src="../assets/image/CYR.png" alt="">
            <img src="../assets/image/photo.png"  class="relative bottom-120 left-20 rounded-full " alt="">
        </div>
    </section>
</template>
<style>
#homeHero{
    height: calc( 100vh - 100px);
    transition: 0.5s;
}
.dark #homeHero{
    background-color: #191919;
    color: white;
}
p{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: url('../assets/image/back-text-dark.jpg');
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.dark .p span {
    -webkit-text-stroke: 2px rgba(0, 0, 0, 0.97);
}

</style>