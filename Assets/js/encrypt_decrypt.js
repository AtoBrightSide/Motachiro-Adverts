const increment = 55;
function simpleEncrypt(string) {
    let capsule = 'key@enc~'
    for (let i = 0; i < string.length; i++) {
        capsule += (string.charAt(i).charCodeAt() + increment) + '~';
    }
    return capsule + 'key@enc';
}


