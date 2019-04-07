Vue.component(
    "mainheader",{
        data: function(){
            return {
            }
        },
        mounted(){
            this.addstyle()
        },
        methods:{
            addstyle(){
                let el = document.getElementById("header")
                el.style.width = "100%"
                el.style.height = "15%"
                el.style.background = "black"
            },
            change(){
                let el = document.getElementById("header")
                let bg = el.style.background 
                bg === "blue" ? bg = el.style.background = "black" : el.style.background = "blue"
            }
        }, 
        computed: {

        },
        filters:{
        },
        template: '<div v-on:click="change" id="header"></div>'
    }
);