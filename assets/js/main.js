const app = Vue.createApp({
  data(){
    return{
      toDoList: [
        {
          id: 1,
          title: 'view your To Do here',
          complete: false,
        }
      ]
    }
  }
});

app.mount('#app')