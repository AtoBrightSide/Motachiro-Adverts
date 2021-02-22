console.log(n.newName);
// setTimeout(showAdmin, 3000);
// (p=="user")?showUser() : showAdmin();
setTimeout(users, 1000);
function showUser() {
    
    
}

function showAdmin() {
    document.querySelector('.container').innerHTML = " ";
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = "Users here are: " + users();
    document.querySelector('.container').innerHTML = " ";
    console.log(" its an admin");
}

function users(){
    let ourClients = "";
    let trs = DB.transaction(['AccountsCompany'], 'readonly').objectStore('AccountsCompany');
    trs.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;
        if(cursor){
            // ourClients += ;
            console.log("hello"+cursor.value.companyName);
            cursor.continue();
        }
    }
    
    return ourClients;
}

function clientInfo(){
    let websitesChosen = document.getElementById('fb_checkbox');
}