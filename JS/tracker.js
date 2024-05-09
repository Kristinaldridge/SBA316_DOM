document.body.onload = addElement;

function addElement() {

let header = body.createElement("div");
let textNode = body.createTextNode("Tally Up!");
header.appendChild(textNode);

const currentDiv = document.getElementById("div1")

document.body.insertBefore(header, currentDiv);

}


const liList = doument.getElementById("commentList")
const textInput = documnet.getElementById("textComment")
const textButton = document.getElementById("buttonAdd")

function addComment (){
    const newComment = liListList.value;
    if (newComment === "") return;
    liListList.appendChild(document.createElement("li")).textcontent = newComment;
    textInput.value ="";
    textInput.focus();
}

textButton.addEventListener("click", addComment);