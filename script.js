const questions = [
    {
        'que': 'Which of the following is a markup langauge?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'Python',
        'correct': 'a'
    },
    {
        'que': 'what does HTML stand for?',
        'a':'HyperText Markup Language',
        'b':'Cascading Style Sheets',
        'c':'Javascript Object Notation',
        'd':'Markdown',
        'correct' : 'a',
    },
    {
        'que': 'What is the purpose of CSS in web development?',
        'a':'To style and layout web pages',
        'b':'To create interactive user interfaces',
        'c':'To add functionality to web applications',
        'd':'All of the above',
        'correct': 'a'
    },
    {
        'que': 'what year was Javascript launched',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct' : 'b',
    },
];
let index=0;
let total = questions.length;
let correct =0
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const options = document.querySelectorAll(".options");
const btn =document.querySelector(".btn");

const loadQuestions = () => {
    if(index === total){
        return end();
    }else {
    reset(); 
    }
    const data = questions[index];
    console.log(data);
    quesBox.innerText =  `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText =data.a;
    options[1].nextElementSibling.innerText =data.b;
    options[2].nextElementSibling.innerText =data.c;
    options[3].nextElementSibling.innerText =data.d;
    
}

const submitQuiz = () => {
    const data =questions[index];
    const ans = getAnswer();
    if(ans === ''){
        alert('Please select an answer before moving to the next question.');
        return;
    }
    if(ans === data.correct ){
        correct++;
    }
    else
    {
     wrong++
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let selectedOption = ''
    options.forEach((option) => {
        
        if (option.checked){
            selectedOption = option.value;
            //console.log(selectedOption)
            }
            });

        return selectedOption;
}

const reset = () => {
    //btn.style.display="none";
    options.forEach((option) => {
        option.checked=false;

    })
}

const end = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
        <h3>Thanks for playing quiz</h3>
        <h2>${correct} / ${total} are correct</h2>
    </div>`
}

loadQuestions();
