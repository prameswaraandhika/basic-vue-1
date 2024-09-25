const app = Vue.createApp({
    data () {
        return {
            message: "Hello World",
            messageHtml: "<h1> Hello World </h1>",
            upload: false,
            msgUpload: "Ready to upload",
            loadingImg: 'loading.gif'
        }
    }
})
const mountedApp = app.mount('#app')