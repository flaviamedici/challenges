// function myFunction() {
//   var checkBox = document.getElementById("myCheck");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//       text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }

function checkTotal() {
  document.listForm.total.value = '';
  var sum = 0;
  for (i=0;i<document.listForm.choice.length;i++) {
    if (document.listForm.choice[i].checked) {
      sum = sum + parseInt(document.listForm.choice[i].value);
    }
  }
  document.listForm.total.value = sum;
}

//display current month
function myMonth() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("monthpick").innerHTML = n;
}


// function myFunction(idCheck, idText) {
//   var checkBox = document.getElementById(idCheck);
//   var text = document.getElementById(idText);
//   if (checkBox.checked == true){
//       text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }

// Reference the form - see HTMLFormControlsCollection
var chxGrp = document.forms.checkGroup;

/* Register the change event to form. 
|| Call message() function when a change event happens on or 
|| within the form.
|| A change event occurs when the user enters data (*input*) 
|| within a form control like an input (*focus*) then clicks onto
|| another (*unfocus*).
|| change event is different than most of the events because it
|| involves multple steps from the user, but it is very effective 
|| for form controls.
*/
chxGrp.addEventListener('change', message);

/* The Event Object is passed through, you might've seen it as 
|| "e" or "evt". How it's labelled doesn't matter because Event
|| Object is always available when you deal with the DOM.
*/
function message(event) {
  
  // if the node clicked is a checkbox see if it's...
  if (event.target.type === 'checkbox') {
  
    // ... checked then...
    if (event.target.checked) {
    
      // ...find the node that follows it (i.e. <b>)...
      event.target.nextElementSibling.className = "message";
    } else {
      /* Otherwise remove any class on it. (there's a more modern
      || method: classList that can be used instead)
      */
      event.target.nextElementSibling.className = "";
    }
  }
  return false;
}
