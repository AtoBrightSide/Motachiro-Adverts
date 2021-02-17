
function myProfile() {
    let t = DB.transaction(['LoginInfo'], 'readonly');
    let obj5 = t.objectStore('LoginInfo');
    let res = obj5.get(username);
    // console.log(res);
    alert(res);
}

myProfile();