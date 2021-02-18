var loginButton = document.getElementById("loginButton");
var theuserName = document.getElementById("email");
var thepword = document.getElementById("password");
var loginMessage = document.getElementById("loginMessage");
var count = 0;
var actualLength = 0;

loginButton.addEventListener('click', function () {
    let trs = DB.transaction(['LoginInfo'], 'readonly');
    let obj5 = trs.objectStore('LoginInfo');
    // let myIndex = obj5.index('userLogin');
    // var myCounter = myIndex.count();
    
    // myCounter.onsuccess = function () {
    //     var theCount = myCounter.result;   
    // }
    let res = obj5.count();
    res.onsuccess = function () {
        count = res.result;
    }
    obj5.openCursor().onsuccess = function (e) {

        var cursor = e.target.result;
        let u = cursor.value.userLogin.split("*");
        let uN = u[0];
        let pN = u[1];

        if (cursor){
            if((uN==theuserName.value) && (pN==thepword.value)){
                // console.log("there it is")
                location.assign("accounts.html")
                userName.value = "";
                thepword.value = "";
                count = 0;
                actualLength = 0
                return;
            }
            
            else{
                // let li = document.createElement("p");
                // li.className = "red-text text-darken-2";
                // li.innerHTML = "Incorrect entry, try again?";
                // alert("Invalid Entry")
                // thepword.style.borderColor = "red";
                // theuserName.style.borderColor = "red";
                // loginMessage.appendChild(li);
                
                actualLength++;
            
            }
            cursor.continue();
                
        }else {
            if (count == actualLength) {
                console.log("No data in DB");
                count = 0;
                actualLength = 0;
                thepword.style.borderColor = "red";
                theuserName.style.borderColor = "red";
            }
        }
        
    }

    
});
