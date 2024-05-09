document.body.onload = addElement;

function addElement() {

const header = body.createElement("div");
const textNode = body.createTextNode("Tally Up!");
header.appendChild(textNode);

const currentDiv = document.getElementById("div1")

document.body.insertBefore(header, currentDiv);

}


const uList = doument.getElementById("commentList")
const textInput = documnet.getElementById("textComment")
const textButton = document.getElementById("buttonAdd")

function addComment (){
    const newComment = uList.value;
    if (newComment === "") return;
    uList.appendChild(document.createElement("li")).textcontent = newComment;
    textInput.value ="";
    textInput.focus();
}

textButton.addEventListener("click", addComment);