document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event) {
    event.preventDefault();//prevents page reload after submission

    //selects the inputted text from the text field
    const taskDescription = document.getElementById("new-task-description").value;
  
    buildToDo(taskDescription);
  })
});


function buildToDo(task){

  const taskList = document.getElementById("tasks");
  const li = document.createElement("li");
  

  li.textContent = task;
  taskList.appendChild(li);

  
  console.log(task);
}
