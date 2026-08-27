const questions = [

{
question: "When you have a free weekend, what sounds best?",
answers: [
["Explore somewhere I've never been", {SUN:2, CHR:2, DAI:1}],
["Spend quality time with people I care about", {TUL:3, SUN:1}],
["Take charge and plan something exciting", {ROS:3, DAI:1}],
["Do something spontaneous and fun", {DAI:3, SUN:1}],
["Work on a creative idea", {CHR:3, LAV:1}],
["Stay somewhere quiet and recharge", {LAV:3, TUL:1}]
]
},

{
question: "When your friends need you, you usually...",
answers: [
["Encourage them to look at the positive side", {SUN:3, DAI:1}],
["Listen and make sure they feel understood", {TUL:3, LAV:1}],
["Help them figure out what to do next", {ROS:3, SUN:1}],
["Try to make them laugh", {DAI:3, SUN:1}],
["Come up with an unusual solution", {CHR:3, ROS:1}],
["Give them space and a calm perspective", {LAV:3, TUL:1}]
]
},

{
question: "Which compliment would make you happiest?",
answers: [
["You always bring good energy.", {SUN:3, DAI:1}],
["You really understand people.", {TUL:3, LAV:1}],
["You know how to make things happen.", {ROS:3, SUN:1}],
["You make everything more fun.", {DAI:3, SUN:1}],
["You have such a unique way of thinking.", {CHR:3, LAV:1}],
["Being around you feels peaceful.", {LAV:3, TUL:1}]
]
},

{
question: "You suddenly have an afternoon with no plans. What do you do?",
answers: [
["Go out and see what happens", {SUN:2, DAI:2}],
["Call someone and spend time together", {TUL:3, DAI:1}],
["Start working toward a personal goal", {ROS:3, CHR:1}],
["Find something entertaining to do", {DAI:3, SUN:1}],
["Draw, design, photograph or make something", {CHR:3, LAV:1}],
["Enjoy some quiet time by yourself", {LAV:3, TUL:1}]
]
},

{
question: "When something doesn't go according to plan...",
answers: [
["I stay positive and find another way", {SUN:3, ROS:1}],
["I think about how it affects everyone involved", {TUL:3, LAV:1}],
["I take control and solve the problem", {ROS:3, SUN:1}],
["I don't overthink it and just go with it", {DAI:3, SUN:1}],
["I look for a completely different approach", {CHR:3, ROS:1}],
["I pause, think and respond calmly", {LAV:3, TUL:1}]
]
},

{
question: "What kind of place attracts you the most?",
answers: [
["Bright, lively and full of energy", {SUN:3, DAI:1}],
["Cozy, warm and welcoming", {TUL:3, LAV:1}],
["Stylish, impressive and inspiring", {ROS:3, CHR:1}],
["Colorful, playful and unexpected", {DAI:3, CHR:1}],
["Artistic, unusual and full of ideas", {CHR:3, ROS:1}],
["Quiet, natural and relaxing", {LAV:3, TUL:1}]
]
},

{
question: "If you could instantly learn one thing, what would you choose?",
answers: [
["Something that helps me experience more of life", {SUN:3, DAI:1}],
["Something that helps me understand people", {TUL:3, LAV:1}],
["Something that makes me more successful", {ROS:3, SUN:1}],
["Something fun that I can enjoy with others", {DAI:3, SUN:1}],
["A new creative skill", {CHR:3, LAV:1}],
["Something that helps me understand myself", {LAV:3, TUL:1}]
]
},

{
question: "Which sentence feels most like you?",
answers: [
["There is always something good waiting ahead.", {SUN:3, CHR:1}],
["People matter more than things.", {TUL:3, LAV:1}],
["If I want something, I'll make it happen.", {ROS:3, SUN:1}],
["Life is too short not to have fun.", {DAI:3, SUN:1}],
["Why follow the usual way?", {CHR:3, ROS:1}],
["Sometimes the best thing is simply to slow down.", {LAV:3, TUL:1}]
]
}

];


const personalities = {

SUN:{
  name:"SUNFLOWER",
  flower:"🌻",
  title:"SI OPTIMIS",

  traits:"Positif • Terbuka • Menguatkan",

  description:
  "Anda cenderung melihat kemungkinan baik dalam berbagai situasi. Kehadiran Anda sering membantu suasana terasa lebih ringan, tanpa perlu mengabaikan kenyataan yang ada.",

  vibe:"Energi yang membangun",

  strength:
  "Melihat peluang dan membantu menjaga semangat.",

  color:"#FFC928"
},


TUL:{
  name:"TULIP",
  flower:"🌷",
  title:"SI HANGAT",

  traits:"Peka • Tulus • Penuh perhatian",

  description:
  "Anda cenderung memperhatikan kebutuhan dan perasaan orang di sekitar. Anda nyaman membangun hubungan melalui perhatian kecil yang tulus dan konsisten.",

  vibe:"Hangat dan bersahabat",

  strength:
  "Membuat orang merasa didengar dan dihargai.",

  color:"#FF8FA3"
},


ROS:{
  name:"ROSE",
  flower:"🌹",
  title:"SI PENUH TEKAD",

  traits:"Bersemangat • Fokus • Berani melangkah",

  description:
  "Ketika sesuatu terasa penting bagi Anda, biasanya Anda memberikan energi dan komitmen yang cukup kuat. Anda nyaman mengubah niat menjadi langkah yang lebih nyata.",

  vibe:"Terarah dan bersemangat",

  strength:
  "Menjaga fokus dan mendorong ide menjadi tindakan.",

  color:"#E84A5F"
},


DAI:{
  name:"DAISY",
  flower:"🌼",
  title:"SI CERIA",

  traits:"Ringan • Spontan • Menyenangkan",

  description:
  "Anda cenderung mudah menemukan kesenangan dalam momen sederhana. Energi Anda sering membantu interaksi terasa lebih santai, ringan, dan akrab.",

  vibe:"Ceria dan bersahabat",

  strength:
  "Mencairkan suasana dan menciptakan momen menyenangkan.",

  color:"#F4D35E"
},


CHR:{
  name:"CHERRY BLOSSOM",
  flower:"🌸",
  title:"SI ADAPTIF",

  traits:"Terbuka • Fleksibel • Menghargai proses",

  description:
  "Anda cenderung cukup nyaman menghadapi perubahan dan melihatnya sebagai bagian dari perjalanan. Anda mampu menyesuaikan pendekatan tanpa harus kehilangan arah.",

  vibe:"Luwes dan terus berkembang",

  strength:
  "Menyesuaikan diri dan menemukan cara baru ketika keadaan berubah.",

  color:"#F5A6C8"
},


LAV:{
  name:"LAVENDER",
  flower:"🪻",
  title:"SI TENANG",

  traits:"Reflektif • Seimbang • Penuh pertimbangan",

  description:
  "Anda cenderung memberi diri sendiri ruang untuk berpikir sebelum merespons. Sikap tersebut membantu Anda menjaga keseimbangan dan melihat situasi dengan lebih jernih.",

  vibe:"Tenang dan seimbang",

  strength:
  "Menjaga kejernihan ketika situasi terasa ramai.",

  color:"#9B83D7"
}

};


let currentQuestion = 0;

let scores = {
SUN:0,
TUL:0,
ROS:0,
DAI:0,
CHR:0,
LAV:0
};

let history = [];


const screens =
document.querySelectorAll(".screen");


function showScreen(id){

screens.forEach(screen =>
screen.classList.remove("active")
);

document
.getElementById(id)
.classList.add("active");

window.scrollTo(0,0);

}


document
.getElementById("startBtn")
.addEventListener("click", startQuiz);


function startQuiz(){

currentQuestion = 0;

scores = {
SUN:0,
TUL:0,
ROS:0,
DAI:0,
CHR:0,
LAV:0
};

history = [];

showScreen("quiz");

renderQuestion();

}


function renderQuestion(){

const data =
questions[currentQuestion];

document
.getElementById("questionText")
.textContent =
data.question;


document
.getElementById("progressText")
.textContent =
String(currentQuestion + 1)
.padStart(2,"0")
+
" / "
+
String(questions.length)
.padStart(2,"0");


document
.getElementById("progressBar")
.style.width =
((currentQuestion + 1) /
questions.length * 100)
+
"%";


const answers =
document.getElementById("answers");

answers.innerHTML = "";


data.answers.forEach(
(answer,index)=>{

const button =
document.createElement("button");

button.className =
"answer-btn";

button.innerHTML =
`
<span class="answer-letter">
${String.fromCharCode(65+index)}
</span>
${answer[0]}
`;

button.onclick =
()=> selectAnswer(answer[1]);

answers.appendChild(button);

});

}


function selectAnswer(points){

history.push(points);

Object.keys(points)
.forEach(key => {

scores[key] += points[key];

});


if(
currentQuestion <
questions.length - 1
){

currentQuestion++;

setTimeout(
renderQuestion,
180
);

}

else{

showScreen("analyzing");

setTimeout(
calculateResult,
2200
);

}

}


document
.getElementById("backBtn")
.addEventListener(
"click",
goBack
);


function goBack(){

if(currentQuestion === 0){
return;
}

const previous =
history.pop();

Object.keys(previous)
.forEach(key => {

scores[key] -= previous[key];

});

currentQuestion--;

renderQuestion();

}


function calculateResult(){

let highest =
Math.max(...Object.values(scores));

let winners =
Object.keys(scores)
.filter(
key =>
scores[key] === highest
);


/*
Tie breaker:
If scores are identical,
choose one of the tied results.
Later we can replace this
with secondary scoring.
*/

const winner =
winners[
Math.floor(
Math.random() *
winners.length
)
];

showResult(winner);

}


function showResult(key){

const p =
personalities[key];

document.documentElement
.style.setProperty(
"--accent",
p.color
);


document
.getElementById("resultFlower")
.textContent =
p.flower;

document
.getElementById("resultName")
.textContent =
p.name;

document
.getElementById("resultTitle")
.textContent =
p.title;

document
.getElementById("resultTraits")
.textContent =
p.traits;

document
.getElementById("resultDescription")
.textContent =
p.description;

document
.getElementById("resultVibe")
.textContent =
p.vibe;

document
.getElementById("resultStrength")
.textContent =
p.strength;


document
.getElementById("redeemFlower")
.textContent =
p.flower;

document
.getElementById("redeemName")
.textContent =
p.name;

document
.getElementById("ticketFlower")
.textContent =
p.flower + " " + p.name;


const code =
generateRedeemCode();

document
.getElementById("redeemCode")
.textContent =
code;


showScreen("result");

}


function generateRedeemCode(){

const number =
Math.floor(
1000 +
Math.random() *
9000
);

return "FLW-" + number;

}


document
.getElementById("claimBtn")
.addEventListener(
"click",
()=> showScreen("redeem")
);


document
.getElementById("restartBtn")
.addEventListener(
"click",
()=>{

document.documentElement
.style.setProperty(
"--accent",
"#FFC928"
);

showScreen("landing");

});
