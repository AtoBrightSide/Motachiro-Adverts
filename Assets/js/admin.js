setTimeout(showAdmin, 100);

function showAdmin() {
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = " ";
    allUsers();
}

function elUsers(names, pck, pm){
    let cl = document.getElementById('cL');
    cl.innerHTML += `<li class="collection-item">${names}</li>`;
    let cl2 = document.getElementById('cL2');
    cl2.innerHTML += `<li class="collection-item">${pck}</li>`;
    let cl3 = document.getElementById('cL3');
    cl3.innerHTML += `<li class="collection-item">${pm}</li>`;
}

function allUsers(){
    let trs2 = DB.transaction(['ProfileInfo'], 'readonly').objectStore('ProfileInfo');
    trs2.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if(cursor){
            elUsers(cursor.value.username, cursor.value.packagesUsed, cursor.value.platformsUsed);
            cursor.continue();
        }
    }
}

function platformsChosen(){
    let platformsArray = [];
    const platforms = document.querySelectorAll('input[name="platform"]:checked');
    platforms.forEach(element => {
        platformsArray.push(element.value);
    });
    console.log(platformsArray);
    return platformsArray;   
}