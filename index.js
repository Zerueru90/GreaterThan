new Vue({
    
    el: '#app',
    async created(){
        this.fetchData();
    },
    data:
    {
        dataArray: []
    },
    methods:{
        fetchData: async function()
        {
            return axios
            .get('http://dummy.restapiexample.com/api/v1/employees')
                .then(response => 
                {
                    this.dataArray = response.data.data;
                    console.log(this.dataArray);
                })
        }
    }
})