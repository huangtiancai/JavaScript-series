new Vue({
  el: '#vue-app',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    // fetch api 请求
    fetch('http://jsonplaceholder.typicode.com/todos').then(res => {
      // console.log(res.json());
      return res.json();
    }).then(todos => {
      // console.log(todos); // 200条数据
      this.todos = todos;
    })
  }
})