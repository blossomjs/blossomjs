<template>
  <div class="container">
    <div class="content page">
      <iframe ref="iframeRef" id="iframe"></iframe>
    </div>
    <div class="toolbar">
      <el-button @click="start">加载</el-button>
      <el-button @click="change">变化</el-button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const getHtml = () => {
      const scriptStr =
        `<script type='text/javascript' id='script'>` +
        `window.control = function (type, value) {
            if (type == "color") {
                document.querySelector('.d').style.color = value
            }
        }` +
        `<` +
        `/script>`

      return `
        <html>

<head>
    <style type="text/css">
        .d {
            color: red;
        }
    </style>
</head>

<body>
    <div class="d">ddddddddd</div>
    ${scriptStr}
</body>

</html>
      `
    }
    const iframeRef = ref(null)
    const start = () => {
      console.log("iframeRef", [iframeRef.value])
      const html = getHtml()
      const win = iframeRef.value.contentWindow
      const doc = win.document
      doc.body.innerHTML = html

      var oldScript = doc.querySelector("#script")
      doc.body.removeChild(oldScript)
      var newScript = document.createElement("script")
      newScript.type = "text/javascript"
      newScript.innerHTML = oldScript.innerHTML
      doc.body.appendChild(newScript)
      setTimeout(() => {
        if (win.control) {
          win.control("color", "green")
        }
      })
    }
    const change = () => {
      const win = iframeRef.value.contentWindow
      if (win.control) {
        win.control("color", "orange")
      }
    }
    return {
      start,
      iframeRef,
      change,
    }
  },
}
</script>
<style scoped lang="scss">
.container {
  .content {
    &.page {
      height: 600px;
      margin-right: 300px;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
