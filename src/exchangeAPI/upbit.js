let socketUpbit;
let socketBithumb;
let binanceSocket;
import axios from 'axios';

// 웹소켓 연결

function connectBinaceSocket(symbol, callback) {
    binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws');
    // console.log("symbol",symbol)
    const msg = {
        method: 'SUBSCRIBE',
        params: symbol,
        id: 1,
    };

    binanceSocket.onopen = () => {
        binanceSocket.send(JSON.stringify(msg));
    };
    binanceSocket.onmessage = (event) => {
        // console.log("event", JSON.parse(event.data))
        return callback(JSON.parse(event.data))
    }
}

function connectWS(symbol, exchange, callback) {
    let connect;
    getSocket().then((result) => {
        if (result) {
            if (exchange === "upbit") {
                // getSocket().then((result: any) => {
                //     if (result) {
                socketUpbit = new WebSocket("wss://api.upbit.com/websocket/v1");
                socketUpbit.binaryType = 'arraybuffer';
                socketUpbit.onopen = function (e) {
                    //소켓이 연결되면
                    // 		    {"type":"trade","codes":["KRW-BTC","KRW-ETH","KRW-XRP"]}

                    connect = "upbit"
                    upbitfilterRequest(`[
                                            {"ticket":"UNIQUE_TICKET"},
                                            {"type":"ticker","codes":${JSON.stringify(symbol)}}]`)
                }
                socketUpbit.onmessage = async function (e) {
                    if (connect === "upbit") {
                        let enc = new TextDecoder("utf-8");
                        let arr = new Uint8Array(e.data);
                        // console.log("arr",arr)
                        let str_d = enc.decode(arr);
                        // console.log("str_d",str_d)
                        let response = JSON.parse(str_d);

                        return callback(response)
                    }
                }
                socketUpbit.onclose = function (e) {
                    socketUpbit = undefined;
                }
            } else if (exchange === "bithumb") {
                // getSocket().then((result: any) => {
                //     if (result) {
                socketBithumb = new WebSocket("wss://pubwss.bithumb.com/pub/ws");
                socketBithumb.binaryType = 'arraybuffer';

                socketBithumb.onopen = function (e) {
                    //소켓이 연결되면
                    bithumbfilterRequest(`{"type":"ticker","symbols":${JSON.stringify(symbol)},"tickTypes":["MID"]}`);
                }

                socketBithumb.onmessage = async function (e) {
                    // console.log("e.data",e.data)
                    return callback(e.data)
                };
                socketBithumb.onclose = function (e) {
                    socketBithumb = undefined;
                }
            }
        }
    })
}


// 웹소켓 연결 해제
function closeWS() {
    if (socketUpbit !== undefined) {
        socketUpbit.close();
        socketUpbit = undefined;
    }

    if (socketBithumb !== undefined) {
        socketBithumb.close();
        socketBithumb = undefined;
    }
}

// 웹소켓 요청
function upbitfilterRequest(filter) {
    if (socketUpbit == undefined) {
        alert('no connect exists upbit');
        return;
    }
    socketUpbit.send(filter);

}

// 웹소켓 요청
function bithumbfilterRequest(filter) {
    if (socketBithumb == undefined) {
        alert('no connect exists bithumb');
        return;
    }
    socketBithumb.send(filter);

}

function getSocket() {
    return new Promise((resolve, reject) => {
        if (socketUpbit || socketBithumb) {
            closeWS()
            resolve(true)
        } else {
            resolve(true)
        }

    })

}

const loadUpbitListingInfo = (callback) => {
    return new Promise((resolve, reject) => {
        let UPBIT_LISTING = {
            KRW_MARKET : {},
            BTC_MARKET : {}
        }

        axios.defaults.maxContentLength = 10 * 1024 * 1024;

        axios.get('https://api.upbit.com/v1/market/all')
            .then(response => {
                response.data.map((value, index) => {

                    let symbol = value.market.replace('-','');

                    if(value.market.indexOf('KRW-') !== -1){
                        UPBIT_LISTING.KRW_MARKET[symbol] = value
                    } else if(symbol.indexOf('BTC-') !== -1) {
                        UPBIT_LISTING.BTC_MARKET[symbol] = value
                    }
                })

                resolve(UPBIT_LISTING);
            })
            .catch(error => {
                // console.log("getAllUpbitCryptoList Error : " + error)
            });
    })
}

export {connectWS, closeWS, getSocket, connectBinaceSocket, loadUpbitListingInfo};
