let dados = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "Assets/img/person1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "bill Anderson",
    job: "the boss",
    img: "Assets/img/person4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },

  {
    id: 3,
    name: "anna Johnson",
    job: "web designer",
    img: "Assets/img/person2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  {
    id: 4,
    name: "peter",
    job: "intern",
    img: "Assets/img/person3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

let currentEmployee = 0;

let buttons = document.querySelectorAll(".button-container button");

buttons.forEach((btn) => {
  if (btn.className == "prev-btn") {
    btn.addEventListener("click", prevEmployee);
  } else if (btn.className == "next-btn") {
    btn.addEventListener("click", nextEmployee);
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  loadEmployee(1);
});

document.querySelector(".random-btn").addEventListener("click", randomEmployee);

function loadEmployee(idEmployee) {
  let nameEmployee = "";
  let jobEmployee = "";
  let imgEmployee = "";
  let textEmployee = "";
  let idSearch = idEmployee;

  for (let i in dados) {
    if (dados[i].id == idSearch) {
      nameEmployee = dados[i].name;
      jobEmployee = dados[i].job;
      imgEmployee = dados[i].img;
      textEmployee = dados[i].text;
    }
  }

  document.querySelector("#author").textContent = nameEmployee;
  document.querySelector("#job").textContent = jobEmployee;
  document.querySelector("#description").textContent = textEmployee;
  document.querySelector(".img-container img").src = imgEmployee;
}

function randomEmployee() {
  let lenghtEmployee = Object.keys(dados).length;
  let randomNumber = Math.floor(Math.random() * lenghtEmployee + 1);

  currentEmployee = randomNumber;
  loadEmployee(currentEmployee);
}

function nextEmployee() {
  currentEmployee++;

  if (currentEmployee > 4) {
    currentEmployee = 1;
  }

  loadEmployee(currentEmployee);
}

function prevEmployee() {
  currentEmployee--;

  if (currentEmployee <= 0) {
    currentEmployee = dados.length;
  }

  loadEmployee(currentEmployee);
}
