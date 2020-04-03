function submitFunc(e) {
  e.preventDefault();
  let Name = document.getElementById("email-input").value;
  let userPasse = document.getElementById("pass").value;
  let employeeID = document.getElementById("user").value;

  if (Name == null || Name == "") {
    alert("Please input name");
    return;
  } else if (userPasse == null || userPasse.length < 6) {
    alert("check the password and try again");
    return;
  } else if (employeeID == null || employeeID == "") {
    alert("pls enter employee ID");
    return;
  }

  const passcheck = userPass();
  if(!true)
  {
    return;
  }

  check(); 
}

function check() {
  let Name = document.getElementById("email-input").value;
  let place = document.getElementById("branch");
  let notSelected = place.value == "Select branch";

  if (notSelected) {
    alert("please select branch");
    return;
  }

  const post = document.getElementById("post").value;
  const branch = document.getElementById("branch").value;

  if (post  == "manager" && branch != notSelected) {
    alert("welcome Manager " + Name);
  } else {
    alert("Welcome !");
  }

  alert("Please try again");
}

function userPass() {
  var newPassword = document.getElementById("pass").value;
  var minNumberofChars = 6;
  var maxNumberofChars = 16;
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  alert(newPassword);
  if ( newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars) {
    return false;
  }

  if (!regularExpression.test(newPassword)) {
    alert("password should contain atleast one number and one special character");
    return false;
  }

  return true;
}


// let verify = (document.getElementById("login-btn").onclick = function() {
//   let Name = document.getElementById("email-input").value;
//   let userPass = document.getElementById("pass").value;
//   let employeeID = document.getElementById("user").value;

//   if (Name == null || Name == "") {
//     alert("Please input name");
//   } else if (userPass == null || userPass.length < 6) {
//     alert("check the password and try again");
//   } else if (employeeID == null || employeeID == "") {
//     alert("pls enter employee ID");
//   }

//   document.getElementById("login-btn").addEventListener("click", check);

//   function userPass() {
//     var newPassword = document.getElementById("pass").newPassword.value;
//     var minNumberofChars = 6;
//     var maxNumberofChars = 16;
//     var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     alert(newPassword);
//     if (
//       newPassword.length < minNumberofChars ||
//       newPassword.length > maxNumberofChars
//     ) {
//       return false;
//     }
//     if (!regularExpression.test(newPassword)) {
//       alert(
//         "password should contain atleast one number and one special character"
//       );
//       return false;
//     }
//   }

//   function check() {
//     let place = document.getElementById("branch");
//     let notSelected = place.value == "Select branch";

//     if (notSelected) {
//       alert("please select branch");
//     }

//     if (
//       document.getElementById("post").value == "manager" &&
//       document.getElementById("branch").value != notSelected
//     ) {
//       alert("welcome Manager " + Name);
//     } else {
//       alert("Welcome !");
//     }
//     return alert("Please try again");
//   }
// });
