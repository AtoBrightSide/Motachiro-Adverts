setTimeout(showAdmin, 100);

function showAdmin() {
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = " ";
    allUsers();
}

function showAll(names, user) {
    let cl = document.getElementById('cL');
    cl.innerHTML += `<li class="collection-item"><pre>${names}                  ${user}</pre></li>`;
    let cl2 = document.getElementById('cL2');
    cl2.innerHTML += `<li class="collection-item"><pre>${names}                  ${user}</pre></li>`;
}

function elUsers(names, pm) {
    let cl3 = document.getElementById('cL3');
    cl3.innerHTML += `<li class="collection-item">${pm}</li>`;
}

function allUsers() {
    let trs2 = DB.transaction(['ProfileInfo'], 'readonly').objectStore('ProfileInfo');
    trs2.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
            elUsers(cursor.value.username, cursor.value.packagesUsed, cursor.value.platformsUsed);
            cursor.continue();
        }
    }

    let trs3 = DB.transaction(['AccountsIndividual'], 'readonly').objectStore('AccountsIndividual');
    trs3.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
            showAll((cursor.value.fname + " " + cursor.value.lname), cursor.value.username_Email);
            cursor.continue();
        }
    }
    let trs4 = DB.transaction(['AccountsCompany'], 'readonly').objectStore('A');
    trs4.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
            showAll2((cursor.value.companyName, cursor.value.company_Email, cursor.value.compUserName));
            cursor.continue();
        }
    }
}

function platformsChosen() {
    let platformsArray = [];
    const platforms = document.querySelectorAll('input[name="platform"]:checked');
    platforms.forEach(element => {
        platformsArray.push(element.value);
    });
    console.log(platformsArray);
    return platformsArray;
}