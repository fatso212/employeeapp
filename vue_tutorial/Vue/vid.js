Vue.component(
    'vid', 
    {
        //props: ['friend'],
        data: function(){
            return {
                url: {
                    trees: "../Vanilla/assets/180825_13_garden.mp4"
                }
            }
        },
        //beforeCreate(),
        //create(),
        mounted(){
            console.log("the video is on the dom")
            //put in dynamic data
        },
        //beforeMount(),
        //beforeDestroy(),
        //destroy(),
        template: '<video loop muted autoplay>' + 
        '<source v-bind:src= "url.trees" type = "video/mp4">' +
        '</source></video>',
        filters: {},
        methods: {},
        computed: {}
    }
);