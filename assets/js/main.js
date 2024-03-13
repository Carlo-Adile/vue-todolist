const app = Vue.createApp({
  data(){
    return{
      toDoList: [
        {
          id: 1,
          title: 'view your To Do here',
          complete: false,
        }
      ],
      newToDoTitle: ''
    };
  },
  methods: {
    generateToDo(){
      this.toDoList.push({
        id: this.toDoList.length + 1,
        title: this.newToDoTitle,
        completed: false,
      });
      this.newToDoTitle = '';
    }
  }
});

app.mount('#app')