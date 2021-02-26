showUser();
function showUser() {
    if(JSON.parse(getFromLocal('userProfiles')) )
        stuff()
        console.log("hello");
    
}

function platformsChosen(){
    let platformsArray = [];
    const platforms = document.querySelectorAll('input[name="platform"]:checked');
    platforms.forEach(element => {
        platformsArray.push(element.value);
    });

    return platformsArray; 
}

function buttonClicked() {
    var myPlats = platformsChosen();
    (myPlats.length)?stuff():alert('Nothing has been selected')
}
function stuff() {
    var myPlats = platformsChosen();
    let accName = localStorage.getItem('username');
    document.getElementById('user-name').innerHTML = accName;
    document.querySelector('.container').innerHTML = ' ';
    document.getElementById('accountHeader').innerHTML = 'You have chosen platforms';
    document.getElementById('accountMiniHeader').innerHTML = `Hello ${accName}`;

    let ul = document.querySelector('.collection');

    let accProfile = {
        name: accName,
        plats: myPlats
    }
    
    theLocalStorage('userProfiles', JSON.stringify(accProfile));

    let output = ``;
    myPlats.forEach(element => {
        output = `<li class="collection-item">${element}</li>`;
        ul.innerHTML += output;
    });
}


