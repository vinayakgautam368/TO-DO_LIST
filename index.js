showNotes();
document.querySelector(".addText").addEventListener("click", function() {

  var text = document.querySelector("#Text");


  // console.log(text);
  var notes = localStorage.getItem("notes");
  // console.log(notes);
  if (notes == null) {
    notesObj = [];
  } else {

    // HERE WE CONVERT STRING INTO ARRAY
    notesObj = JSON.parse(notes);

    console.log(notesObj);
  }
  notesObj.push(text.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  text.value = "";
  // console.log(notesObj);
  showNotes();


});

function showNotes() {
  var notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  // 1.FOR EACH
  //   The Array.forEach() method calls a function once for each element in an array, in order.
  //
  // Array.forEach() is not executed for array elements without values.


  //2. WHY WE USE BACKTICKS
  // Backticks aka “template literals” aka “template strings” aka “fancy strings” were introduced in the ES2015 specifications. ...
  // Backticks are commonly used for multi-line strings or when you want to interpolate an expression within your string.
  //   var a = 123, str = `---
  //    a is: ${a}
  // ---`;
  // console.log(str);

  var html = "";

  notesObj.forEach(function(element, index) {
    html += `
    <div class="card noteCard" style="width: 18rem;" id="Notes">
      <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-secondary  active ">Delete Note</button>
      </div>
    </div>`;
  });
  var notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {

    notesElm.innerHTML = "Add your memories";
  }

}

function deleteNote(index) {
  // console.log("delete " + index + "note");
  var notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // .splice(index,no of elements wantto delete)
  // ex a=[1,2,3,4,5];
  // if we want to remove 2 elements 2&3 then
  // a.splice(1,2)  1 because 2 is on index 1 and we want to delete two numbers 2&3

  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  // console.log(notesObj);
  showNotes();

}

var sea=document.querySelector("input");
sea.addEventListener("input",function(){
  // var search=document.querySelector("input");
  var inputVal=sea.value;
  // console.log(inputVal);
  var noteCard=document.getElementsByClassName("noteCard");  //here we get array conataining cards having class noteCard means all cards.because in each card we have class noteCard.
  Array.from(noteCard).forEach(function(element){           // Array.from is used to create new Array  which is a shallow copy of given array
    cardTxt=element.getElementsByTagName("p")[0];         //here we give zero because we get array by getElements
    // console.log(cardTxt.innerHTML);
    if (cardTxt.innerHTML.includes(inputVal)){
      element.style.display="block";
      // cardTxt.style.backgroundColor="pink";
    }
    else{
      element.style.display="none";
      // cardTxt.style.backgroundColor=None;
    }


  });
var cl=document.querySelector("#search").addEventListener("click",function(){
  var sea=document.querySelector("input").value="";

});
  // console.log(inputVal);
  // console.log(window.find(sea.value));
  // sea.value="";
});
