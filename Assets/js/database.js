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

      let objStore = db.createObjectStore('AccountsIndividual', { keyPath: 'id', autoIncrement: true });

      objStore.createIndex('fname', 'fname', { unique: false });
      objStore.createIndex('lname', 'lname', { unique: false });
      objStore.createIndex('username_Email', 'username_Email', { unique: true });
      objStore.createIndex('password', 'password', { unique: false });

      let objStore2 = db.createObjectStore('AccountsCompany', { keyPath: 'id', autoIncrement: true });

      objStore2.createIndex('companyName', 'companyName', { unique: true });
      objStore2.createIndex('compUserName', 'compUserName', { unique: true });
      objStore2.createIndex('telephone', 'telephone', { unique: true });
      objStore2.createIndex('company_Email', 'company_Email', { unique: false });
      objStore2.createIndex('password', 'password', { unique: false });
      

      let objStore3 = db.createObjectStore('LoginInfo', {keyPath: 'id', autoIncrement: true});

      objStore3.createIndex('username', 'username', {unique: true});
      objStore3.createIndex('usernamePassword', 'usernamePassword', {unique: true});

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
