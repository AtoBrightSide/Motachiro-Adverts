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





}
