function regCompany() {

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
            password: itemsArray[9],
        };

        userInfo = {
            username : companyData.compUserName,
            usernamePassword : companyData.password
        };


        if (itemsArray[9] == itemsArray[10]) {
            itemsArray = [];

            const passC = document.getElementById("passComp");
            const confirmC = document.getElementById("confirmComp");
            passC.style.borderColor = 'none';
            confirmC.style.borderColor = 'none';

            let tx = DB.transaction(['AccountsCompany'], 'readwrite');
            let objS = tx.objectStore('AccountsCompany');
            let req = objS.add(companyData);

            req.onsuccess = () => {
                alert("youve successfuly registered on our site.");
                items.forEach(elts => {
                    elts.value = '';
                })
            }

            let tx2 = DB.transaction(['LoginInfo'], 'readwrite');
            let obj2 = tx2.objectStore('LoginInfo');
            let req2 = obj2.add(userInfo);

            req2.onsuccess = () => {
                items.forEach(elts => {
                    elts.value = '';
                })
            }
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