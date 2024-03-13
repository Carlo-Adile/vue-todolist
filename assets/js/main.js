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
      /* save new to do title */
      newToDoTitle: '',
      /* modify to do */
      editedToDoTitle: '',
      editedToDoId: null,
    };
  },
  methods: {
    generateToDo(){
      this.toDoList.push({
        id: this.toDoList.length + 1,
        title: this.newToDoTitle,
        completed: false,
      });
      /* reset */
      this.newToDoTitle = '';
    },
    removeToDo(id){
      /* pass a new array without the to do with this id */
      this.toDoList = this.toDoList.filter(todo => todo.id !== id);
    },
    editToDo(id, title){
      /* change template to input text */
      this.editedToDoId = id;
      this.editedToDoTitle = title;
    },
    editDone(){
      /* iterate to find id to edit */
      this.toDoList.forEach(todo => {
        if (todo.id === this.editedToDoId) {
          todo.title = this.editedToDoTitle;
        }
      });
      /* reset */
      this.editedToDoId = null;
      this.editedToDoTitle = '';
    }
  }
});

app.mount('#app')