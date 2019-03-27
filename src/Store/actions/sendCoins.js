//var theAddress = "-1"
var urlprefix = "http://104.196.50.29:8080/";
//var urlprefix = "http://localhost:8080/";

async function sendCoins(fp, amount, addressToSend) {
    var data = JSON.stringify({ "amount": amount, "address": addressToSend });
    const response = await fetch(urlprefix + 'sendCoins', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Fingerprint': fp
        },
        body: data,
    })

    return response
}

export default sendCoins