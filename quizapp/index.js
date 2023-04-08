let question = document.getElementById("question");
const btns = document.querySelectorAll(".btn");
const bar = document.getElementById("barL");

const URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
const NewQuestion = () => {
  window.location.reload();
};

const ShowQuestion = (data) => {
  const k = Math.round(Math.random() * 11);
  const x = Math.round(Math.random() * 3);
  console.log(x);
  let p = -1;
  let AnswerArray = data.results[k].incorrect_answers;
  let Cans = data.results[k].correct_answer;
  let NewArray = AnswerArray.concat(Cans);
  let cort;
  NewArray.sort();
  console.log(data);
  console.log(data.results[k]);
  question.innerHTML = data.results[k].question;

  btns.forEach((button) => {
    p += 1;
    button.innerHTML = NewArray[p];
    if (button.innerHTML === Cans) {
      cort = button;
    }
    button.addEventListener("click", () => {
      if (button.innerHTML === Cans) {
        button.style.background = "  rgb(37, 175, 37)";
      } else {
        button.style.background = "rgb(255, 64, 0)";

        cort.style.background = "  rgb(37, 175, 37)";
      }
      setTimeout(NewQuestion, 1500);
    });
  });
};

function Que() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
    
      ShowQuestion(data);
    });
}




Que();
setInterval(NewQuestion,7000)



/**TESTING  */
// let ar=['ok1','zk2','ak3','ck4','vk5']

// let p='----'
// console.log(ar.sort())
//  console.log(ar[Math.round(Math.random()*3)])
// ar.splice(2,0,p)
// console.log(ar)
// console.log(ar[2])
// console.log('herre')
// console.log(ar)
// let o=ar.slice()
// console.log(o)
// o.splice(1,0,'o1')
// console.log(o)
// function Text(){
//   console.log('ooooo')
// }
// setTimeout(Text,3000)
