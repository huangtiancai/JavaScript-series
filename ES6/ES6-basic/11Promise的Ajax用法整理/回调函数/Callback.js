function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(data,callback) {

    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(data,greeting);