<template>
    <section id="homeHero" class="grid grid-cols-2 pt-10 p-20">
        <div class="about_me">
            <p class="text_hello_parent bg-cover bg-clip-text -webkit-background-clip text-transparent">
               <span class="text-6xl text-stroke hello_text">
                {{ dynamicText }}
               </span> 
            </p>
            <span style=" position: relative; z-index: 10000 !important;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam. Aspernatur iste quidem exercitationem maiores atque totam molestias, saepe minima esse consectetur reiciendis vitae. Nisi corporis neque voluptates officia! Sequi!
               </span>
            <div class="flex gap-6 mt-8">
                <button class="p-4 pl-8 pr-8 bg-black text-white drop-shadow-xl font-bold">DOWNLOAD CV</button>
                <button class="p-4 pl-8 pr-8 bg-black text-white drop-shadow-xl font-bold">CONTACT ME</button>
            </div>
            <div class="waviy mt-20">
                <div>
                    <span style="--i:1">F</span>
                    <span style="--i:2">U</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">C</span>
                    <span style="--i:5">T</span>
                    <span style="--i:6">I</span>
                    <span style="--i:7">O</span>
                    <span style="--i:8">N</span>
                    <span style="--i:9">_</span>
                    <span style="--i:9; color:red;" >C</span>
                    <span style="--i:10; color:red;">O</span>
                    <span style="--i:11; color:red;">D</span>
                    <span style="--i:12; color:red;">I</span>
                    <span style="--i:13; color:red;">N</span>
                    <span style="--i:14; color:red;">G</span>
                    <span style="--i:15; color:red;">()</span>
                    <span style="--i:15">{</span>
                </div>
                <div class="mobil_text">
                    <span class="pl-20" style="--i:17;color:green;" >C</span>
                    <span style="--i:18; color:green;">O</span>
                    <span style="--i:19; color:green;">D</span>
                    <span style="--i:20; color:green;">I</span>
                    <span style="--i:21; color:green;">N</span>
                    <span style="--i:22; color:green;">G</span>          
                    <span style="--i:23; color:green;">();</span>
                </div>
                <span class="mobil_text" style="--i:24">};</span>
            </div>
        </div>
        <div class="my_photo overflow-hidden" style="display: grid ; justify-content: center; align-items: start;">
            <img style="animation: bouncee 3s infinite;" src="../assets/image/CYR.png" alt="">
        </div>
    </section>
    <div class="fixed bottom-10 right-10">
        <div class="github">Gitub</div>  
    </div>
    <CursorEffect/>
</template>

<script>
import CursorEffect from './CursorEffect.vue'

export default {
    data() {
        return {
            dynamicText: '',
        };
    },
    components: {
        CursorEffect,
    },
    mounted() {
        this.animateText();
    },
    methods: {
        animateText() {
        const originalText = "HELLO, I'M RABIE. I'M A FULL-STACK WEB DEVELOPER";
        let index = 0;
        const typeText = () => {
            this.dynamicText = originalText.slice(0, index + 1);
            index++;
            if (index <= originalText.length) {
            setTimeout(typeText, 200); 
            } else {
            index = 0;
            setTimeout(typeText, 1000); 
            }
        };
        typeText();
        },
  },
};
</script>