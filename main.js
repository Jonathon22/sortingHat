"use strict";

const sortingButtonClick = () => {
  document.querySelector("#sort-button").addEventListener("click", buildForm);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
  let domString = ` <form>
    <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Student Name">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2" id="nameButton">Sort!</button>
    </div>
  </div>
</form>`;

  printToDom("#form", domString);
  nameButtonClick();
};
const nameButtonClick = () => {
  document.querySelector("#nameButton").addEventListener("click", getName);
  document.querySelector("#nameButton").addEventListener("click",buildCard);
};

let studentNames = [];

const getName = () => {
  const name = document.getElementById("inlineFormInput").value;

  return studentNames.push(name);

  // console.log(studentNames);

  // console.log(name);
};

const buildCard = () => {
  let domString = '';
  const houses = ['Gryffindor','hufflepuff', 'Slytherin', 'Ravenclaw' ]

  for(let i=0; i < studentNames.length; i++) {
    let housePicker = Math.floor(Math.random() * 4)
   domString += ` <div class="card" style="width: 18rem;">`;
    domString +=     `<div class="card-body">`;
    domString +=   `<h5 class="card-title">${studentNames[i]}</h5>`;
    domString +=    ` <h6 class="card-subtitle mb-2 text-muted">${houses[housePicker]}</h6>`;
  domString += `</div></div>`;
  
  }
      
printToDom("#studentCard", domString);
};

const init = () => {
  sortingButtonClick();
};

init();
