let getPubIP = 'https://api.ipify.org?format=json';
let getPubIP64 = 'https://api64.ipify.org?format=json';
console.log(checkIPv(getPubIP, getPubIP64));
function checkIPv(getPubIP, getPubIP64) {
    if (getPubIP.ip === getPubIP64.ip) {
        fetch(getPubIP)
        .then (response => response.json())
        .then (json => {
            document.getElementById('pubIP').innerHTML = json.ip;
            })
        .catch (error => console.log(error));
    } else {
        if (screen.width < 300) {
           pubIP.style["font-size"] = "0.83em";
        } else if (screen.width < 380) {
            pubIP.style["font-size"] = "1em";
        } else if (screen.width < 540) {
            pubIP.style["font-size"] = "1.1em";
        } else {
            pubIP.style["font-size"] = "1.9em"; 
        }
        fetch(getPubIP64)
        .then (response => response.json())
        .then (json => {
            document.getElementById('pubIP').innerHTML = json.ip;
        })
        .catch (error => console.log(error));
    }
}
function copyIP(getPubIP64) {
    var copedIP = document.getElementById('pubIP').innerHTML;
    navigator.clipboard.writeText(copedIP); 
    alert('Copied IP to clipboard');
}