// alert("Let's start the Meme Generator Project and finish by Saturday night :)")
var buttons = document.getElementsByTagName("button");
var buttonclicks = 0;
var image_events = []

function showInput() {
    buttonclicks++;
    if (buttonclicks%2 === 1 && buttonclicks>4) addRow();
    var currentImage = "image_"+buttonclicks.toString();
    var currentHeader = currentImage + "_header";
    var currentFooter = currentImage + "_footer";
    document.getElementById(currentImage).src = document.getElementById("image link").value;
    document.getElementById(currentHeader).innerHTML = document.getElementById("top text").value;
    document.getElementById(currentFooter).innerHTML = document.getElementById("bottom text").value;
    image_events.push(currentImage);
    document.getElementById("my form").reset();
    workAround();
}

function addRow() { //function is designed to add a row to the table if necessary.
    var table = document.getElementById("Table of Images");
    var Row = table.insertRow(2); //change later.
    var Cell = Row.insertCell(0);
    var Second_Cell = Row.insertCell(1);
    var newText = document.createTextNode('');
    var secondText = document.createTextNode('');
    Cell.append(newText);
    Second_Cell.append(secondText);
    initializeCell(Cell,buttonclicks);
    initializeCell(Second_Cell,buttonclicks+1);
}

function initializeCell(cell,count) {
    var new_id = "image_"+count;
    var node = document.createElement("DIV");
    initializeContainer(cell,new_id);
    cell.appendChild(node);
}

function initializeContainer(node,id) {
    var head = id+"_header";
    var foot = id+"_footer";
    var eraser = 'Erase("'+id+'")';
    node.setAttribute("class","container");
    var erase = document.createElement("A");
    erase.setAttribute("href","#");
    node.appendChild(erase);
    var image = document.createElement("IMG");
    image.setAttribute("class","pictures");
    image.setAttribute("src","");
    image.setAttribute("id",id);
    image.setAttribute("style","max-width:100%;");
    node.appendChild(image);
    var top = document.createElement("DIV");
    top.setAttribute("class","top");
    top.setAttribute("id",head);
    node.appendChild(top);
    var bottom = document.createElement("DIV");
    bottom.setAttribute("class","bottom");
    bottom.setAttribute("id",foot); 
    node.appendChild(bottom);
}

// we have to add the event listener to each button
function workAround() {
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            alert('You just clicked on a button!');
        });
    }
} 

function Erase(ele) {
    var currentHeader = ele+"_header";
    var currentFooter = ele+"_footer";
    document.getElementById(ele).src="";
    document.getElementById(currentHeader).innerHTML="";
    document.getElementById(currentFooter).innerHTML="";
}


//e.preventDefault()

/*  The semi-original function.
    function showInput() { 
    document.getElementById('user submissions').innerHTML = 
    document.getElementById("bottom text").value;
    document.getElementById('image').src = document.getElementById("bottom text").value;
    buttonclicks++;
    var currentImage = "image_"+buttonclicks.toString()
    alert("We're now displaying"+currentImage);
    document.getElementById("my form").reset();
    console.log("hi");
    workAround();
} */
