/**
 * Created by SALA4 on 12/05/2017.
 */
function showIPInfo() {
    var ip = document.getElementById("ipInput").value;
    var partialIP = ip.substring(0, ip.indexOf("/"));
    var octets = partialIP.split(".");
    var suffix = ip.substring(ip.indexOf("/") + 1);

    var classP = document.getElementById("ipClass");
    classP.innerHTML = "<b>Clase de Red -->  </b>" + calculateClass(octets[0]);
    var ipP = document.getElementById("ipDir");
    ipP.innerHTML = "<b>Dirección IP -->  </b>" + calculateBinaryIP(octets);
    var maskP = document.getElementById("networkMask");
    var mask = calculateNetworkMask(parseInt(suffix));
    maskP.innerHTML = "<b>Máscara de red -->  </b>" + mask;
    var subnetworkP = document.getElementById("subnetwork");
    subnetworkP.innerHTML = "<b>Subred -->  </b>" + calculateSubnetwork(octets, mask.split("."));
    var hostsP = document.getElementById("hosts");
    hostsP.innerHTML = "<b>Hosts -->  </b>" + calculateHostsNumber(parseInt(suffix));
}

function calculateClass(n) {
    if (n >= 0 && n <= 127) {
        return "A";
    } else if (n >= 128 && n <= 191) {
        return "B";
    } else if (n >= 192 && n <= 223) {
        return "C";
    } else if (n >= 224 && n <= 239) {
        return "D";
    } else if (n >= 240 && n <= 255) {
        return "E";
    } else {
        return "INVALIDA";
    }
}

function calculateBinaryIP(octets) {
    return parseInt(octets[0]).toString(2) + "." +
           parseInt(octets[1]).toString(2) + "." +
           parseInt(octets[2]).toString(2) + "." +
           parseInt(octets[3]).toString(2);
}

function calculateNetworkMask(suffix) {
    var dir = "";
    var i;
    for (i = 1; i <= 32; i++) {
        if (i <= suffix) {
            dir += "1";
        } else {
            dir += "0";
        }
        if (i % 8 === 0 && i < 32) {
            dir += ".";
        }
    }
    var nOctets = dir.split(".");
    return parseInt(nOctets[0], 2) + "." +
           parseInt(nOctets[1], 2) + "." +
           parseInt(nOctets[2], 2) + "." +
           parseInt(nOctets[3], 2);
}

function calculateSubnetwork(octets, mask) {
    return (parseInt(octets[0]) & parseInt(mask[0])) + "." +
           (parseInt(octets[1]) & parseInt(mask[1])) + "." +
           (parseInt(octets[2]) & parseInt(mask[2])) + "." +
           (parseInt(octets[3]) & parseInt(mask[3]));
}

function calculateHostsNumber(suffix) {
    return Math.pow(2, 32 - suffix) - 2;
}

function validateField(e) {
    var code = window.Event ? e.which : e.keyCode;
    console.log("KeyCode: " + code);
    return (code >= 48 && code <= 57) || code === 46 || code === 47;
}