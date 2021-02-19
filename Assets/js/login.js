//authorization js file
var loginButton = document.getElementById("loginButton");
var loginButtonAdmin = document.getElementById("loginButtonAdmin");
var theuserName = document.getElementById("email");
var thepword = document.getElementById("password");
var theAdmin = document.getElementById("idAdmin");
var theAdminPass = document.getElementById("passAdmin");
var loginMessage = document.getElementById("loginMessage");

var count = 0;
var actualLength = 0;

loginButton.addEventListener('click', function (e) {
    e.preventDefault();
    let trs = DB.transaction(['LoginInfo'], 'readonly');
    let obj5 = trs.objectStore('LoginInfo');
    var res = obj5.count();

    res.onsuccess = function () {
        count = res.result;
    };

    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            let u = cursor.value.userLogin.split("*");
            let uN = u[0];
            let pN = u[1];
            if ((uN == theuserName.value) && (pN == thepword.value)) {
                // console.log("there it is")
                location.assign("accounts.html")
                theuserName.value = '';
                thepword.value = '';
                count = 0;
                actualLength = 0;
                return 0;
            }

            else {

                actualLength++
            }
            cursor.continue();
        }
        else {
            if (count == actualLength) {
                console.log("NO DATA IN DB");
                count = 0;
                actualLength = 0;
                thepword.style.borderColor = "red";
                theuserName.style.borderColor = "red";
                loginMessage.className = "red-text text-accent-2";
                loginMessage.innerHTML = "Incorrect entry, try again?";
            }
        }

    };



});

loginButtonAdmin.addEventListener('click', function (e) {
    e.preventDefault();
    let trs = DB.transaction(['AdminInfo'], 'readonly');
    let obj5 = trs.objectStore('AdminInfo');
    var res = obj5.count();

    res.onsuccess = function () {
        count = res.result;
    };

    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            if ((cursor.value.adminID == theAdmin.value) && (cursor.value.adminPass == theAdminPass.value)) {
                // console.log("there it is")
                location.assign("admin.html")
                theuserName.value = '';
                thepword.value = '';
                count = 0;
                actualLength = 0;
                return 0;
            }
            else    actualLength++;
            cursor.continue();
        }
        else {
            if (count == actualLength) {
                console.log("NO DATA IN DB");
                count = 0;
                actualLength = 0;
                thepword.style.borderColor = "red";
                theuserName.style.borderColor = "red";
                loginMessage.className = "red-text text-accent-2";
                loginMessage.innerHTML = "Incorrect entry, try again?";
            }
        }

    };

});