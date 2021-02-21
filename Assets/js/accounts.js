console.log(n.newName);
showAdmin();
// (p=="user")?showUser() : showAdmin();

function showUser() {
    // console.log(p + " its a user");

}

function showAdmin() {
    document.getElementById('accountHeader').innerHTML = "Admin Page Home"
    document.getElementById('accountMiniHeader').innerHTML = "Users here are: ";
    document.querySelector('.container').innerHTML = " ";
    console.log(p + " its an admin");
}