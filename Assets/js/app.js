(function ($) {
  $(function () {

    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// var userName = document.getElementById("#user-name");
// var hd = document.querySelector(".header");
// var crsl = document.querySelector(".carousel");

// var temp = false


// if (!temp) {
//     // hd.innerHTML = ""
//     crsl.style.display = "none"; 
// }

//IDB Initialization
//------------------------------------------------------------------------------------------------------------------------------------------------
//to make it run on multiple web browsers
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDNKeyRange;

let itemsArray = [];
let fieldsArray = [];
let DB;
if (!window.indexedDB) {
  alert("You're browser doesn't support a stable release of indexedDB");
}

else {
  document.addEventListener('DOMContentLoaded', () => {
    let myDB = indexedDB.open('MC Adverts', 1);

    myDB.onupgradeneeded = function (e) {
      let db = e.target.result;

      let objStore = db.createObjectStore('Accounts', { keyPath: 'id', autoIncrement: true });

      objStore.createIndex('fname', 'fName', { unique: false });
      objStore.createIndex('lname', 'lName', { unique: false });
      objStore.createIndex('usernameemail', 'usernameemail', { unique: false });
      objStore.createIndex('password', 'password', { unique: false });

      console.log('Database ready and fields created!');

    }

    myDB.onsuccess = () => {
      DB = myDB.result;
      console.log("Database ready");

    };

    myDB.onerror = () => {
      console.log('There was an error');
    };


  });

  function regIndividual() {

    let items = document.querySelectorAll(".validate");
    items.forEach(elt => {
      itemsArray.push(elt.value)
    });

    for (let i = 0; i < 5; i++) {
      if (itemsArray[i] == "") {
        fieldsArray[i] = "placeholder"
      }
    };

    if (fieldsArray.length > 0) {
      console.log("One or more fields missing!!");
      fieldsArray = [];
      itemsArray = [];
    }

    else {
      individualData = {
        fname: itemsArray[0],
        lname: itemsArray[1],
        username_Email: itemsArray[2],
        password: itemsArray[3],
      };

      if (itemsArray[3] == itemsArray[4]) {
        itemsArray = [];

        const passI = document.getElementById("passIndi");
        const confirmI = document.getElementById("confirmIndi");
        passI.style.borderColor = 'none';
        confirmI.style.borderColor = 'none';

        let tx = DB.transaction(['Accounts'], 'readwrite');
        let objS = tx.objectStore('Accounts');
        let req = objS.add(individualData);

        req.onsuccess = () => {
          alert("youve successfuly registered on our site.");
          items.forEach(elts => {
            elts.value = '';
          })
        }
      }
      else {
        const passI = document.getElementById("passIndi");
        const confirmI = document.getElementById("confirmIndi");
        passI.style.borderColor = 'red';
        confirmI.style.borderColor = 'red';
        console.log("Sorry but the passwords do not match.");
        itemsArray = [];
      }
    }

  }


  function regCompany() {

    let items = document.querySelectorAll(".validate");
    items.forEach(elt => {
      itemsArray.push(elt.value)
    });

    for (let i = 5; i < 11; i++) {
      if (itemsArray[i] == "") {
        fieldsArray[i] = "placeholder"
      }
    };

    if (fieldsArray.length > 0) {
      console.log("One or more fields missing!!");
      fieldsArray = [];
      itemsArray = [];
    }
    else {
      companyData = {
        companyName: itemsArray[5],
        address: itemsArray[6],
        telephone: itemsArray[7],
        company_Email: itemsArray[8],
        password: itemsArray[9],
      };

      if (itemsArray[9] == itemsArray[10]) {
        itemsArray = [];

        const passC = document.getElementById("passComp");
        const confirmC = document.getElementById("confirmComp");
        passC.style.borderColor = 'none';
        confirmC.style.borderColor = 'none';

        let tx = DB.transaction(['Accounts'], 'readwrite');
        let objS = tx.objectStore('Accounts');
        let req = objS.add(companyData);

        req.onsuccess = () => {
          alert("youve successfuly registered on our site.");
          items.forEach(elts => {
            elts.value = '';
          })
        }
      }

      else {
        const passC = document.getElementById("passComp");
        const confirmC = document.getElementById("confirmComp");
        passC.style.borderColor = "red";
        confirmC.style.borderColor = "red";
        console.log("Sorry but the passwords do not match.");
        itemsArray = [];

      }
    }



  }

}
