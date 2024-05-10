
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Tally Up!");
//const newListItem = document.createElement("li")
newDiv.appendChild(textNode);
//newDiv.appendChild(newListItem);
document.body.appendChild(newDiv);

// applied styling
newDiv.style.color = "purple";
newDiv.style.fontSize = "40px";
newDiv.style.textAlign = "center";
newDiv.style.textDecoration = "underline";




const liList = document.querySelectorAll("li")

const textInputs = document.querySelectorAll("input[type='text']");
const textButtons = document.querySelectorAll("button");



// Iteration. Needed help with adding function to check if the input contains only letters
function containsOnlyLetters(input) {
   for (let i = 0; i < input.length; i++) {
       if (!/[a-zA-Z]/.test(input[i])) {
           return false;
       }
   }
   return true;
}



function addComment (event){
  
   const buttonClicked = event.target;
   const inputField = buttonClicked.previousElementSibling;
   const newComment = inputField.value;

   //const newComment = textInput.value;


   if (newComment === "" || !containsOnlyLetters(newComment)){
      // #1 BOM Property
      alert("Retry! Enter alphabet only.");
   } else {

   //I created new li element
const listItem = document.createElement("li");

//I set the text content of the li to the new comment
listItem.textContent = newComment;

//styled color of text
listItem.style.color = "purple";
listItem.style.fontSize = "40px";
listItem.style.textAlign = "center";

// I appended the new li element to the existing list
 document.body.appendChild(listItem);
 
 // #2 BOM Property

 inputField.focus();
 inputField.value = "";

}

}
 


//textButton.addEventListener("click", addComment);
//textButtonTwo.addEventListener("click", addComment);
//textButtonThree.addEventListener("click", addComment);


//Registered event listeners

textButtons.forEach((button, index) => {
   button.addEventListener("click", addComment);
   textInputs[index].addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
         event.preventDefault();
         button.click();

      }
   });
});

// clone

const cloneNode = newDiv.cloneNode(true);
document.body.appendChild(cloneNode)
