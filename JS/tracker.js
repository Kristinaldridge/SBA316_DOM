alert("success")


const newDiv = document.createElement("div");
const textNode = document.createTextNode("Tally Up!");
const newListItem = document.createElement("li")
newDiv.appendChild(textNode);
newDiv.appendChild(newListItem);
document.body.appendChild(newDiv);



//const liList = doument.getElementById("commentList")
//const textInput = documnet.getElementById("textComment")
////const textButton = document.getElementById("buttonAdd")

//function addComment (){
   // const newComment = liListList.value;
   // if (newComment === "") return;
   // liListList.appendChild(document.createElement("li")).textcontent = newComment;
   // textInput.value ="";
   // textInput.focus();
//}

//textButton.addEventListener("click", addComment);