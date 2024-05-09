alert("success")


const newDiv = document.createElement("div");
const textNode = document.createTextNode("Tally Up!");
const newListItem = document.createElement("li")
newDiv.appendChild(textNode);
newDiv.appendChild(newListItem);
document.body.appendChild(newDiv);



const liList = document.querySelectorAll("li")
const textInput = document.getElementById("textComment")
const textButton = document.getElementById("buttonAdd")

function addComment (){
   const newComment = textInput.value;
   if (newComment === "") return;

   //I created new li element
const listItem = document.createElement("li");

//I set the text content of the li to the new comment
listItem.textContent = newComment;

// I appended the new li element to the existing list
document.body.appendChild(listItem);

   //liList.appendChild(newComment);
  // document.body.appendChild(liList);

   textInput.value ="";
   textInput.focus();
}

textButton.addEventListener("click", addComment);