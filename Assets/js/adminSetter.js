setTimeout(() => {
    var Adminstrator = {
        adminID: "1234",
        adminPass: simpleEncrypt('1234')
    };

    let tp = DB.transaction(['AdminInfo'], 'readwrite');
    let objS6 = tp.objectStore('AdminInfo');
    let reque = objS6.add(Adminstrator);
}, 3000);
