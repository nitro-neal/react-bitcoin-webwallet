import Fingerprint2 from 'fingerprintjs2'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

var fp;

var urlprefix = "http://104.196.50.29:8080/";
//var urlprefix = "http://localhost:8080/";

export default function createFingerprint() {
    if (window.requestIdleCallback) {
        requestIdleCallback(function () {
            Fingerprint2.get(function (components) {
                console.log(components);
                var values = components.map(function (component) { return component.value });
                var murmur = Fingerprint2.x64hash128(values.join(''), 31);
                console.log(murmur);
                fp = murmur;
                register([{ route: '/topic/updateWallet-' + fp, callback: walletUpdate }]);
            })
        })
    } else {
        setTimeout(function () {
            Fingerprint2.get(function (components) {
                console.log(components) // an array of components: {key: ..., value: ...}
                var values = components.map(function (component) { return component.value })
                var murmur = Fingerprint2.x64hash128(values.join(''), 31)
                console.log(murmur) // an array of components: {key: ..., value: ...}
                fp = murmur;
                register([{ route: '/topic/updateWallet-' + fp, callback: walletUpdate }]);
            })
        }, 500)
    }
}

function register(registrations) {
    //const socket = SockJS('/webwallet');
    const socket = SockJS(urlprefix + 'webwallet')
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        registrations.forEach(function (registration) {
            stompClient.subscribe(registration.route, registration.callback);
        });
        stompClientReady();
    });
}

function stompClientReady() {
    alert('ready! lets init the wallet..')
    initWallet(fp)
}

function initWallet(fingerprint) {
    fetch(urlprefix + 'initwallet', {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Fingerprint': fingerprint
        }

    }).then(function (response) {
        console.log(response.status);
    }, function (error) {
        console.log(error.message);
    });
}

function walletUpdate(payload) {
    alert('wallet update called')
    console.log("Payload:" + payload)
    var payloadJson = JSON.parse(payload.body)

    // TODO: Set state in wallet!
    console.log("!! Wallet State:");
    console.log("Receive Address" + payloadJson.receiveAddress + " balance " + payloadJson.balance + " transacitons: " + payloadJson.transactions)

    // TODO: Add qr code
    // qr.addData(payloadJson.receiveAddress);
    // qr.make();
    // document.getElementById('qrPlaceholder').innerHTML = qr.createImgTag(qrSize, qrSize * 4);
}