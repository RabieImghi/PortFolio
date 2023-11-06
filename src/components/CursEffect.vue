<template>
    <div>
      <div id="cursor" :style="cursorStyle">
        <img src="../assets/image/cursor.gif" width="250px" alt="">
      </div>
    </div>
  </template>
  
  <style scoped>
    #cursor {
      position: absolute;
    }
  </style>
  
  <script>

  export default {
    data() {
      return {
        cursorStyle: {
          position : 'absoulut',
          width: '250px',
          height: '250px',
          top: '0px',
          left: '0px'
        }
      };
    },
    methods: {
      handleMouseMove(e) {
        
        this.cursorStyle.top = e.pageY - 125 + 'px';
        this.cursorStyle.left = e.pageX - 125 + 'px';
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.handleMouseMove);
    },
  };
  </script>