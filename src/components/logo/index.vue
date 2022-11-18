<template>
  <div id="font-logo">
    <img id="logo" :src="require('@/assets/images/logo.png')" alt="logo">
    <div id="desc">
      <div id="title">
        {{ info.title }}
      </div>
      <div id="subTitle">
        {{ info.subTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FontLogo",
  data() {
    return {
      info: {
        title: '饭堂',
        subTitle: '真诚热爱'
      }
    }
  }
}
</script>

<style scoped>
#font-logo {
  padding: 0 3px;
  border-radius: 15px;
  text-align: center;
  background-color: rgba(232, 172, 93, 0.3);
  border: 2px solid rgba(232, 172, 93, 0.2);
  transition: all 300ms;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  transform: translate(-50%, -50%);
}

#logo {
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 6px;
}

#desc {
  display: inline-block;
}

#font-logo:hover {
  border: 2px solid rgba(232, 172, 93, 0.8);
}

#title {
  font-family: serif;
  font-size: 23px;
}

#subTitle {
  font-family: note_font, serif;
  font-size: 17px;
  margin-top: 5px;
}
</style>
