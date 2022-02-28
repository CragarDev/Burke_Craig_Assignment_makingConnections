console.log();
//
const userText = document.querySelector("#user-text");
const userImage = document.querySelector("#user-photo-image");
const conReqListItem = document.querySelector(
  "#connnection-requests-container"
);
const connectionCounterText = document.querySelector(".conns-counter h3");
const connectionRequestCounterText =
  document.querySelector(".conreq-counter h3");
let consCounter = 418;
let conReqCounter = 2;

function changeText() {
  const firstNames = [
    "Amy",
    "Brenda",
    "Chante",
    "Deborah",
    "Ellie",
    "Frank",
    "George",
    "Harry",
    "John",
    "Larry"
  ];
  const LastNames = [
    "Monroe",
    "Neuman",
    "Orville",
    "Parker",
    "Rollings",
    "Stewart",
    "Thomas",
    "Volare",
    "Williams",
    "Breckenridge"
  ];
  let randNum = Math.ceil(Math.random() * firstNames.length - 1);

  let randFirstName = firstNames[randNum];
  //   console.log(randFirstName);
  let randNum2 = Math.ceil(Math.random() * LastNames.length - 1);
  let randLastName = LastNames[randNum2];
  userText.innerText = randFirstName + " " + randLastName;
}
//

function changeProfilePict() {
  const profilePicts = [
    "./images/users/adrien-s.jpg",
    "./images/users/alayne-s.jpg",
    "./images/users/anne-s.jpg",
    "./images/users/arry-s.jpg",
    "./images/users/jane-m.jpg",
    "./images/users/phil-s.jpg",
    "./images/users/todd-s.jpg"
  ];
  let randNum = Math.ceil(Math.random() * profilePicts.length - 1);
  userImage.src = profilePicts[randNum];
}

function removeListItem(element) {
  element.parentElement.remove();
}

function addConnection(element) {
  consCounter++;
  connectionCounterText.innerText = consCounter + "+";
}

function removeConnectionRequest(element) {
  conReqCounter--;
  connectionRequestCounterText.innerText = conReqCounter;
}
//

//
console.log();
