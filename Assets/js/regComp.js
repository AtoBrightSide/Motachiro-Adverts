function regFromHome1(){    regCompany('Basic');            }
function regFromHome2(){    regCompany('Intermediate');     }
function regFromHome3(){    regCompany('Advanced');         }

function regCompany(pt) {
    let items = document.querySelectorAll(".validate");
    items.forEach(elt => {
        itemsArray.push(elt.value)
    });

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

        proinfo = {
            username: companyData.compUserName,
            packageUsed: pt,
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