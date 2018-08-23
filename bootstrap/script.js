function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("div", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data =e.dataTransfer.getData("div");
  e.target.appendChild(document.getElementById(data));
}
