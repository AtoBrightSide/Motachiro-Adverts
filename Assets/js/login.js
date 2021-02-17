var loginButton = document.getElementById("loginButton");
var theuserName = document.getElementById("email");
var thepword = document.getElementById("password");
var loginMessage = document.getElementById("loginMessage");

loginButton.addEventListener('click', function () {
    let trs = DB.transaction(['LoginInfo'], 'readonly');
    let obj5 = trs.objectStore('LoginInfo');

    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor){
            // if (cursor.value.username == )
            if((cursor.value.username==theuserName.value) && (cursor.value.usernamePassword==thepword.value)){
                // console.log("there it is")
                location.assign("accounts.html");
                
            }
            else{
                // let li = document.createElement("p");
                // li.className = "red-text text-darken-2";
                // li.innerHTML = "Incorrect entry, try again?";
                alert("Invalid Entry")
                thepword.style.borderColor = "red";
                theuserName.style.borderColor = "red";
                loginMessage.appendChild(li);
            }
            cursor.continue();
            
        }
    }
});