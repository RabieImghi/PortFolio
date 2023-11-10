<template>
    <section id="homeHero" class="grid grid-cols-2 pt-10 p-20">
        <div class="about_me">
            <p class="text_hello_parent bg-cover bg-clip-text -webkit-background-clip text-transparent">
               <span class="text-6xl text-stroke hello_text">
                {{ dynamicText }}
               </span> 
            </p>
            <span style=" position: relative; z-index: 10000 !important;">
                HELLO?
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
            <img style="animation: bouncee 3s infinite;" src="../assets/image/giphy.gif" alt="">
        </div>
    </section>
    <div class=" contactme flex items-center flex-wrap gap-10 justify-center mt-5">
        <div class="relative p-3 rounded-1 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
            <img src="../assets/image/ithub.gif" class="rounded-full w-10" alt="">
        </div>
        <div class="relative p-3 rounded-1 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
            <img src="../assets/image/linkedin.gif" class=" w-10" alt="">
        </div>
        <div class="relative p-3 rounded-1 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
            <img src="../assets/image/gmail.gif" class=" w-10" alt="">
        </div>
        <div class="relative p-3 rounded-1 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
            <img src="../assets/image/whatsapp.gif" class="rounded-full w-10" alt="">
        </div>
    </div>
    
</template>
<script>

export default {
    data() {
        return {
            dynamicText: '',
        };
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