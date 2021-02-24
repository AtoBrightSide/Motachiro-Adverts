var theuserName = document.getElementById("email");
var thepword = document.getElementById("password");
var theAdmin = document.getElementById("idAdmin");
var theAdminPass = document.getElementById("passAdmin");
var loginMessage = document.getElementById("loginMessage");

var count = 0;
var actualLength = 0;

function loginUser() {
    // e.preventDefault();
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
            if ((uN == theuserName.value) && (simpleDecrypt(pN) == thepword.value)) {
                theuserName.value = '';
                thepword.value = '';
                count = 0;
                actualLength = 0;
                // n.newName = "user";
                location.assign('accounts.html');
                return 0;
            }

            else        actualLength++
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
}

function loginAdmin() {
    // e.preventDefault();
    let trs = DB.transaction(['AdminInfo'], 'readonly');
    let obj5 = trs.objectStore('AdminInfo');
    var res = obj5.count();

    res.onsuccess = function () {
        count = res.result;
    };

    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            if ((cursor.value.adminID == theAdmin.value) && (simpleDecrypt(cursor.value.adminPass) == theAdminPass.value)) {
                theuserName.value = '';
                thepword.value = '';
                count = 0;
                actualLength = 0;

                location.assign('admin.html');
                return 0;
            }
            else actualLength++;
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

}