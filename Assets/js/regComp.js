// document.getElementById('chooseBeg').addEventListener('click', () => {    
//     regCompany('Basic');            
// });
// document.getElementById('choooseInd').addEventListener('click', () => {    
//     regCompany('Intermediate');     
// });
// document.getElementById('chooseAdv').addEventListener('click', () => {    
//     regCompany('Advanced');         
// });


b="";
function regFromHome1(){    b="Basic";                      }
function regFromHome2(){    b="Intermediate";     }
function regFromHome3(){    b="Advanced";         }


function regCompany() {
    let items = document.querySelectorAll(".validate");
    items.forEach(elt => {
        itemsArray.push(elt.value)
    });
    let a = Math.round(Math.random() * 3);
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
            compUserName: itemsArray[6],
            telephone: itemsArray[7],
            company_Email: itemsArray[8],
            password: simpleEncrypt(itemsArray[9])
        };

        userInfo = {
            userLogin: companyData.compUserName + "*" + companyData.password,
        };

        client = {
            username : companyData.compUserName,
        }

        b = (a==2)?"Basic":(a==1)?"Intermediate":"Advanced";
        proinfo = {
            username: companyData.compUserName,
            packagesUsed: b,
            platformsUsed: "",
        }

        if (itemsArray[9] == itemsArray[10]) {
            itemsArray = [];
            const passC = document.getElementById("passComp");
            const confirmC = document.getElementById("confirmComp");
            passC.style.borderColor = 'none';
            confirmC.style.borderColor = 'none';

            createUser(companyData, 'AccountsCompany','readwrite');
            loginInfo(userInfo);
            clientInfo(proinfo);
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