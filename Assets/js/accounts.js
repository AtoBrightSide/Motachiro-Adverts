import { theuserName } from './login.js';
import { thepword } from './login.js';

// import * as p from 'login.js';
function myProfile() {
    let trs = DB.transaction(['LoginInfo'], 'readonly');
    let obj5 = trs.objectStore('LoginInfo');

    obj5.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        let u = cursor.value.userLogin.split("*");
        let uN = u[0];
        let pN = u[1];
        if (cursor){
            // if (cursor.value.username == )
            if((uN==theuserName.value) && (pN==thepword.value)){
                // console.log("there it is")
                location.assign("accounts.html");
                // export { theuserName };
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
}
// myProfile()
setTimeout(myProfile, 3000); 