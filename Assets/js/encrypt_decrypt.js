//this is the an important factor in the encrypting process
const increment = 55;

//To encrypt the strings
function simpleEncrypt(string) {
    let capsule = 'key@enc~'
    for (let i = 0; i < string.length; i++) {
        capsule += (string.charAt(i).charCodeAt() + increment) + '~';
    }
    return capsule + 'key@enc';
}

//To decrypt the encrypted string.
function simpleDecrypt(string) {
    var passSplit = string.split('~');
    let passString = ''
    for (let i = 1; i < passSplit.length - 1; i++) {
        passString += (String.fromCharCode(parseInt(passSplit[i]) - increment))
    }
    return passString;
}
