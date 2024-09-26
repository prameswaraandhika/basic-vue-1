const app = Vue.createApp({
    data () {
        return {
            message: "Hello World",
            messageHtml: "<h1> Hello World </h1>",
            upload: false,
            msgUpload: "Ready to upload",
            selectedFile: "There is no file whose be selected",
            loadingImg: ''
        }
    }
})
const mountedApp = app.mount('#app')