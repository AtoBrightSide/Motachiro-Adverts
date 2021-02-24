setTimeout(showAdmin, 100);

function showAdmin() {
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = " ";
    // console.log(" its an admin");
    allUsers();
}

function elUsers(names){
    let cl = document.getElementById('cL');
    cl.innerHTML += `<li class="collection-item">${names}</li>`;
    let cl2 = document.getElementById('')
}

function allUsers(){
    let trs = DB.transaction(['Clients'], 'readonly').objectStore('Clients');
    trs.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if(cursor){
            elUsers(cursor.value.username);
            cursor.continue();
        }
    }
    let trs2 = DB.transaction(['Clients'], 'readonly').objectStore('Clients');
    trs2.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if(cursor){
            elUsers(cursor.value.username);
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