import Fingerprint2 from 'fingerprintjs2'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { pushTransaction, setBalanceAmount, setReceiveAddress, setFingerprint } from './index'

import QrCode from 'qrcode-generator'

var qrSize = 4;
var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = QrCode(typeNumber, errorCorrectionLevel);



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
                // fp = ("" + Math.random()).replace(".","");
                register([{ route: '/topic/updateWallet-' + fp, callback: walletUpdate }]);
            })
        })
    } else {
        setTimeout(function () {
            Fingerprint2.get(function (components) {
                console.log(components)
                var values = components.map(function (component) { return component.value })
                var murmur = Fingerprint2.x64hash128(values.join(''), 31)
                console.log(murmur)
                fp = murmur;
                // fp = ("" + Math.random()).replace(".","");
                register([{ route: '/topic/updateWallet-' + fp, callback: walletUpdate }]);
            })
        }, 500)
    }
}

function register(registrations) {
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

var firstTime = true;

function walletUpdate(payload) {
    console.log("Wallet update with paylaod:" + payload)
    var payloadJson = JSON.parse(payload.body)
    //console.log("Receive Address" + payloadJson.receiveAddress + " balance " + payloadJson.balance + " transacitons: " + payloadJson.transactions)
    setFingerprint(fp)
    setBalanceAmount(payloadJson.balance)
    setReceiveAddress(payloadJson.receiveAddress)

    if(firstTime) {
        qr.addData(payloadJson.receiveAddress);
        qr.make();
        document.getElementById('qrPlaceholder').innerHTML = qr.createImgTag(qrSize, qrSize * 4);
    }
    
    for(var i = 0, size = payloadJson.transactions.length; i < size ; i++){
        var transaction = payloadJson.transactions[i];

        pushTransaction({ 
            method: transaction.transactionType,
            amount: transaction.amount,
            transactionId : transaction.transactionId,
            timestamp: transaction.timestamp,
            address: transaction.address,
            qrcode: qr.createImgTag(qrSize, qrSize * 4)
        })

        if(!firstTime) {
            break;
        }
    }

    firstTime = false;
}

