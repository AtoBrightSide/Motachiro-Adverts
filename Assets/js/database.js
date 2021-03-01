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

    let objStore3 = db.createObjectStore('LoginInfo', { keyPath: 'id', autoIncrement: true });
    objStore3.createIndex('userLogin', 'userLogin', { unique: true });

    let objStore4 = db.createObjectStore('ProfileInfo', { keyPath: 'id', autoIncrement: true });
    objStore4.createIndex('username', 'username', { unique: true });
    objStore4.createIndex('packagesUsed', 'packagesUsed', { unique: false });
    objStore4.createIndex('platformsUsed', 'platformsUsed', { unique: false });

    let objStore5 = db.createObjectStore('Clients', { keyPath: 'id', autoIncrement: true });
    objStore5.createIndex('username', 'username', { unique: true });

    let objStore6 = db.createObjectStore('AdminInfo', { keyPath: 'id', autoIncrement: true });
    objStore6.createIndex('adminID', 'adminID', { unique: true });
    objStore6.createIndex('adminPass', 'adminPass', { unique: true });
    objStore6.createIndex('adminName', 'adminName', { unique: false });
  }

  myDB.onsuccess = () => {
    DB = myDB.result;
    console.log("Database ready and fields created!");
  };

  myDB.onerror = () => {
    console.log('There was an error');
  };
});

function createUser(objName, store, mode) {
  let tx = DB.transaction([store], mode);
  let objS = tx.objectStore(store);

  let req = objS.add(objName);

  req.onsuccess = () => {
    alert("youve successfuly registered on our site.");
  };
}

function loginInfo(userInfo) {
  let tx2 = DB.transaction(['LoginInfo'], 'readwrite');
  let obj2 = tx2.objectStore('LoginInfo');
  let req2 = obj2.add(userInfo);
  req2.onsuccess = () => {

  };
}

function clientInfo(client) {
  let tx3 = DB.transaction(['ProfileInfo'], 'readwrite');
  let obj3 = tx3.objectStore('ProfileInfo');
  let req3 = obj3.add(client);

  req3.onsuccess = () => {

  };

}

function theLocalStorage(obj, data) {
  localStorage.setItem(obj, data);
}

function clrLocalStorage(obj) {

}

function getFromLocal(obj) {
  return localStorage.getItem(obj);
}