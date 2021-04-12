// PICKING DATA FROM HTML
// let name=document.getElementById('username').value
// let password=document.getElementById('password').value

// MAKING OBJECT OF THE ABOVE DATA
// let student={
//     name,
//     password
// }

// A FUNCTION THAT IS PUSHING/SAVING DATA TO FIREBASE
// function saveData(){
// SENDING DATA TO FIREBASE REALTIME DATABASE
//firebase.database().ref('student').push(student)
// }

// FOLLOWING FUNCTION WILL REPLACE ALL THE DATA
// firebase.database().ref('student').set(student)

// SAVING NESTED DATA
//  FIRST METHOD
// firebase.database().ref("student").child("student1").set(student);
//  SECOND METHOD
// firebase.database().ref("student/student1").set(student);

//MAKING KEY WITH FIREBASE
// let key=firebase.database().ref().push().key

// GETTING DATA BACK FROM FIREBASE REALTIME DATABASE
// function getFirebaseData(){
// firebase.database().ref('nephews').once('value',snap=>console.log(snap.val()))
// }

// TODO APP IN JAVASCRIPT WITH FIREBASE REALTIME DATABASE
// const addTodoButton = document.getElementById("add-todo-button");
// let newTodoInput = document.getElementById("new-todo");
// let listDiv = document.getElementById("list");

// function addTodo() {
// PUTTING DATA IN FIREBASE DATABASE

// GENERATING A RANDOM KEY USING FIREBASE
// let key = firebase.database().ref().push().key;

//   let todo = {
//     value: newTodoInput.value,
//     key: key,
//   };
//   firebase.database().ref("todos").child(key).set(todo);
//   // CREATING LI TAG AND ITS TEXT
//   const liElement = document.createElement("li");
//   const liText = document.createTextNode(newTodoInput.value);

//   // CREATING EDIT BUTTON
//   const editBtnEl = document.createElement("button");
//   const editBtnText = document.createTextNode("EDIT");
//   editBtnEl.appendChild(editBtnText);
//   editBtnEl.setAttribute("class", "btn btn-warning");
//   editBtnEl.setAttribute("onclick", "editTodo()");

//   // CREATING DELETE BUTTON
//   const deleteButtonEl = document.createElement("button");
//   const deleteButtonText = document.createTextNode("DELETE");
//   deleteButtonEl.appendChild(deleteButtonText);
//   deleteButtonEl.setAttribute("class", "btn btn-danger");
//   deleteButtonEl.setAttribute("onclick", "deleteTodo(this)");

//   liElement.appendChild(liText);
//   liElement.innerHTML += editBtnEl.outerHTML + deleteButtonEl.outerHTML;
//   listDiv.appendChild(liElement);
//   newTodoInput.value = "";
// }

// function deleteAll() {
//   listDiv.innerHTML = "";
// }

// function editTodo() {
//   console.log("edit button clicked");
// }

// function deleteTodo(receivingThis) {}
