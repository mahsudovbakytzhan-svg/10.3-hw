// const input = document.getElementById("email");
// input.addEventListener("keydown",(event) =>{
//   console.log ("нажмите клавиш:", event.key)
// });

const input = document.getElementById("email");

input.addEventListener("keydown", (event) => {
  console.log("Нажмите клавишу:", event.key);
});
const input2 = document.getElementById("password");
input2.addEventListener("keydown", (event)=>{
  console.log("нажмите клавиш:",event.key)
});

const button = document.getElementById("bnt");
button.addEventListener("click", () => {
  console.log("Батырма басылды!");
});

// 1 tapsyrma 
localStorage.setItem ("greeting","Привет мир")
console.log(localStorage.getItem("greeting"))

// 2 tapsyrma 
localStorage.removeItem ("greeting");
const deletedGreeting = localStorage.getItem("greeting")
 console.log (deletedGreeting)

// 3 tapsyrma

const user = {
  name:"Kyansh",
  age: 21,
  greeting:"привет мир"

  
}
const userJson = JSON.stringify(user);
localStorage.setItem ("userData",userJson);
const usenJSONrrr = localStorage.getItem("userData");
const newUSER = JSON.parse(usenJSONrrr);
console.log(newUSER);
// 4 tapsyrma
user.country = "Kazakhstan"
localStorage.setItem ("user",JSON.stringify(user));
const userNEW = JSON.parse(localStorage.getItem("user"))
console.log(userNEW) 
// 5 tapsyrma




const user2 = {
  name:"Bakytzhan",
  age: 21,
  
}
  localStorage.setItem("user2",JSON.stringify(user2))
  const newUSER2 =JSON.parse(localStorage.getItem("user2"))
  if (localStorage.getItem("user2")){
  console.log("Данные о пользователе найдены +")
}else{
  console.log('Данные о пользователе не найдены -')
}
//6tapsyrma
localStorage.clear()
if (localStorage.getItem('user') === null) {
    console.log('даные не сущестивите  ');
} else {
    console.log('данные еще сущестивите  ');
}
// 7 tapsyrma 
const tasks = [
  { title: 'Выучить JavaScript', completed: false },
  { title: 'Сделать проект', completed: true },
  { title: 'Прочитать статью по React', completed: false }
];
localStorage.setItem('tasks',JSON.stringify(tasks))
const storedTasks = localStorage.getItem ('tasks')
if (storedTasks) {
  const tasksArray = JSON.parse(storedTasks); // қайтадан массивке айналдырамыз

  tasksArray.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} — ${task.completed ? '✅ Орындалды' : '❌ Орындалмады'}`);
  });


//8 tapsyrma
tasksArray[0].completed = true

localStorage.setItem('tasks',JSON.stringify(tasksArray))
console.log(" сакталды")
}

















