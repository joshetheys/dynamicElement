let newUL = document.createElement('ul');
let friends = ["Reagan", "Joshua", "Amanda", "Xena", "Mikhail", "Cameron"];
function smartPeople (){
let ul =document.body.appendChild(newUL);
friends.forEach((item) =>{
ul.innerHTML += 
`<li> ${item}</li>`
}
)};

smartPeople();