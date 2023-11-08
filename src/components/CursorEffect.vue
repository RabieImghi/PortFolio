<template>
  <div id="cursor" :style="cursorStyle">
      <l-ripples
          size="700"
          speed="2" 
          :color="darkMode ? 'white' : 'black'" 
      ></l-ripples>
  </div>
</template>
<style>
body{
  overflow: hidden;
}
#cursor{
  opacity: 0.06;
  rotate: 25deg;
}
</style>


<script >
import { ripples } from 'ldrs'
ripples.register()
export default {
data() {
  return {
    cursorStyle: {
        position : 'absolute',
        width: '100px',
        height: '100px',
        top: '0px',
        left: '0px',
    }
  };
},
created() {
  document.documentElement.addEventListener('mousemove', this.handleMouseMove);
},
methods: {
  handleMouseMove(e) {
    this.cursorStyle.top = e.pageY-430  + 'px';
    this.cursorStyle.left = e.pageX-200  + 'px';
  },
  
},
};
</script>
