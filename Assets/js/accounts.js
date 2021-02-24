function showUser() {   
    let trs = DB.transaction(['Clients'], 'readwrite').objectStore('Clients');

    
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