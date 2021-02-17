var loginButton = document.getElementById("loginButton");
var theuserName = document.getElementById("email");
var thepword = document.getElementById("password");
var loginMessage = document.getElementById("loginMessage");

loginButton.addEventListener('click', function () {
    var trs = DB.transaction(['LoginInfo'], 'readonly');
    var obj5 = trs.objectStore('LoginInfo');



    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor){
            // if (cursor.value.username == )
            if((cursor.value.username==theuserName.value) && (cursor.value.usernamePassword==thepword.value)){
                // console.log("there it is")
                location.assign("accounts.html");
                
            }
            else{
                let li = document.createElement("li");
                li.innerHTML = "Incorrect entry, try again?";
                loginMessage.appendChild(li);
            }

            cursor.continue();
        }
    }
});