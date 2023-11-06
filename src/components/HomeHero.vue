<template>
    <section id="homeHero" class="grid grid-cols-2 pt-10 p-20">
        <div class="about_me">
            <p class="text_hello_parent bg-cover bg-clip-text -webkit-background-clip text-transparent">
               <span class="text-6xl text-stroke hello_text">
                {{ dynamicText }}
               </span> 
            </p>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam. Aspernatur iste quidem exercitationem maiores atque totam molestias, saepe minima esse consectetur reiciendis vitae. Nisi corporis neque voluptates officia! Sequi!
               </span>
            <div class="flex gap-6 mt-8">
                <button class="p-4 pl-8 pr-8 bg-black text-white drop-shadow-xl font-bold">DOWNLOAD CV</button>
                <button class="p-4 pl-8 pr-8 bg-black text-white drop-shadow-xl font-bold">CONTACT ME</button>
            </div>
        </div>
        <div class="my_photo overflow-hidden" style="display: flex; justify-content: center; align-items: start;">
            <img style="animation: bouncee 3s infinite;" src="../assets/image/CYR.png" alt="">
        </div>
    </section>
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
        this.attachCursorListener();
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