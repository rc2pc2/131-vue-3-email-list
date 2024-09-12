const { createApp } = Vue


// # generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

createApp({
    data() {
        return{
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            mailsList: [],
            userText : '',
        }
    },
    methods:{
        getRandomNumber(){
            for (let index = 0; index < 10; index++) {
                axios.get(this.apiUrl)
                    .then( (response) => {
                        console.log(response.data.response);
                        this.mailsList.push(response.data.response);
                    }
                );
                console.log(`Fine del ciclo for all'iterazione numero ${index}`);
            }
        },
    },
    mounted(){
        setTimeout(this.getRandomNumber, 2000);
    },
    computed: {
        loadingCompleted(){
            console.log("Ho invocato il metodo areEmailsLoaded()");
            return this.mailsList.length === 10;
        }
    },
}).mount('#app');


