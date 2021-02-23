
setTimeout(showAdmin, 100);
function showUser() {
    
    
}

function showAdmin() {
    document.querySelector('#container').innerHTML = " ";
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = " ";
    // console.log(" its an admin");
    let cl = document.getElementById('cL');
    
    let output = ``;
    let theUsers = allUsers();
    console.log(theUsers);
    theUsers.forEach(element => {
    
        output += `<li class="collection-item">${element}</li>`;    
    });
    
    cl.innerHTML = output;
}

function allUsers(){
    let ourClients = [];
    let trs = DB.transaction(['Clients'], 'readonly').objectStore('Clients');
    trs.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if(cursor){
            ourClients.push(cursor.value.username);
            cursor.continue();
        }
    }
    return ourClients;
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

function buttonClicked() {
    location.assign('platforms.html');
}