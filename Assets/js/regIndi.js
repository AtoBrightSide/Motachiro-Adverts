function regIndividual() {
    let items = document.querySelectorAll(".validate");
    items.forEach(elt => {
        itemsArray.push(elt.value)
    });

    for (let i = 0; i < 5; i++) {
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
        individualData = {
            fname: itemsArray[0],
            lname: itemsArray[1],
            username_Email: itemsArray[2],
            password: simpleEncrypt(itemsArray[3]),
        };

        userInfo = {
            userLogin: individualData.fname + "*" + individualData.password,
        };

        if (itemsArray[3] == itemsArray[4]) {
            itemsArray = [];

            createUser(individualData, 'AccountsIndividual','readwrite');
            loginInfo(userInfo);

            const passI = document.getElementById("passIndi");
            const confirmI = document.getElementById("confirmIndi");
            passI.style.borderColor = 'none';
            confirmI.style.borderColor = 'none';
        }
        else {
            const passI = document.getElementById("passIndi");
            const confirmI = document.getElementById("confirmIndi");
            passI.style.borderColor = 'red';
            confirmI.style.borderColor = 'red';
            console.log("Sorry but the passwords do not match.");
            itemsArray = [];
        }
    }

}