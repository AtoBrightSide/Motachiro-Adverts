// var isDone;
var accName = localStorage.getItem('username');
document.getElementById('accountHeader').innerHTML = `Hello ${accName}`;
document.getElementById('user-name').innerHTML = accName;
// document.getElementById('choosePlatforms').addEventListener('click', buttonClicked);
setTimeout(showUser, 100);
var myPlats = platformsChosen();
function showUser() {
    if (JSON.parse(getFromLocal('userProfiles')))
        stuff();
    // else
    //     finished();
}

function platformsChosen() {
    let platformsArray = [];
    const platforms = document.querySelectorAll('input[name="platform"]:checked');
    platforms.forEach(element => {
        platformsArray.push(element.value);
    });

    theLocalStorage('platforms', JSON.stringify(platformsArray));

    return platformsArray;
}

function buttonClicked() {

    (myPlats.length) ? stuff() : alert('Nothing has been selected')
}

function stuff() {
    var myPlats = JSON.parse(getFromLocal('platforms'));


    document.querySelector('.container').innerHTML = ' ';
    document.getElementById('accountMiniHeader').innerHTML = 'You have chosen platforms';

    let ul = document.querySelector('.collection');


    let accProfile = {
        username: accName,
        packagesUsed: "",
        platformsUsed: myPlats,
    }

    clientInfo(accProfile);
    theLocalStorage('userProfiles', JSON.stringify(accProfile));

    let output = ``;
    myPlats.forEach(element => {
        output = `<li class="collection-item">${element}</li>`;
        ul.innerHTML += output;
    });
    ul.innerHTML += `<li class="collection-item center"><a class="waves-effect waves-light btn modal-trigger center" href="#modal1">Confirm</a></li>`
    let popup = `
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Finalize Payment</h4>
                        <p>You have now subscribed to use the following platforms; ${myPlats}</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>                                            
                    `;
    document.getElementById('thepopup').innerHTML += popup;
}
