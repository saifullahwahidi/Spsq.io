// BTCUSD Start




// biance real time price Start 

const binanceSocket = new WebSocket('wss://fstream.binance.com/ws@aggTrades');
const binance_price=  document.getElementById("binance_BTC_PRICE")
let lastPrice=null
const symbol = 'btcusdt'; // replace with the symbol you want to subscribe to

const message = JSON.stringify({
  "method": "SUBSCRIBE",
  "params":
    [`${symbol}@ticker`],
  "id": 1
});

binanceSocket.onopen = () => {
  console.log('WebSocket connection opened');
  binanceSocket.send(message);
};

binanceSocket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  let Price=innerText= (data.c)
  console.log(data);

binance_price.innerText= Price
binance_price.style.color=!lastPrice || lastPrice === Price ? "#77ccff": Price > lastPrice ? '#77ccff':'#77ccff'
lastPrice=Price
};

binanceSocket.onerror = (error) => {
  console.error(`WebSocket error: ${error}`);
};

// Unsubscribe from the BTCUSDT ticker stream
const unsubscriptionMessage = JSON.stringify({
    "method": "UNSUBSCRIBE",
    "params": [
      "btcusdt@ticker"
    ],
    "id": 2
  });
  







   // binance Index BTC price 



  {
    const binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1s');
    const binancePrice = document.getElementById("binance_BTC_Index_price");
    let indexPrice = null;
    const symbol = 'btcusdt'; // replace with the symbol you want to subscribe to
    
    const message = JSON.stringify({
      "method": "SUBSCRIBE",
      "params": [`${symbol}@ticker`],
      "id": 1
    });
    
    binanceSocket.onopen = () => {
      console.log('WebSocket connection opened');
      binanceSocket.send(message);
    };
    
    binanceSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      let price = parseFloat(data.k.o).toFixed(2);
      console.log(data);
    
      // compare the current and previous prices and update color
      if (indexPrice !== null) {
        if (price > indexPrice) {
          binancePrice.style.color = "#ffabfc";
        } else if (price < indexPrice) {
          binancePrice.style.color = "#ffabfc";
        } else {
          binancePrice.style.color = "#ffabfc";
        }
      }
    
      binancePrice.innerText = price;
      indexPrice = price;  
    };
    
    binanceSocket.onerror = (error) => {
      console.error(`WebSocket error: ${error}`);
    };
    
  }
  








// binance Index Number













 






































// Bybit Exchange Start




// Bybit real Price Start




const ws = new WebSocket("wss://stream.bybit.com/realtime");

ws.onopen = () => {
  console.log("WebSocket connection opened");

  // Subscribe to topic(s)
  ws.send(
    JSON.stringify({
      op: "subscribe",
      args: ["trade.BTCUSD"] 
    })
  );
};

ws.onmessage = event => {
  console.log("Received message:", event.data);

  const h1 = document.getElementById("bybit_BTC_PRICE");
  const data = JSON.parse(event.data);
  h1.style.color = "#77ccff";

  const price =
    data.data && data.data.length > 0 ? data.data[0].price : "";
  if (price) {
    h1.textContent =  price;
  }
};

ws.onclose = event => {
  console.log("WebSocket connection closed");

  // Handle closed connection
  // ...
};

ws.onerror = error => {
  console.error("WebSocket error:", error);

  // Handle error
  // ...
};







// Bybit index Price 




{
{
    const socket = new WebSocket('wss://www.deribit.com/ws/api/v2');
    let lastPrice = 0;// bybit index price 
    
    
    // Listen for when the connection is opened
    socket.addEventListener('open', (event) => {
        console.log('WebSocket connected.');
    
        // Subscribe to funding rate updates for BTC-PERPETUAL contract
        const request = {
            jsonrpc: '2.0',
            method: 'public/subscribe',
            id: 1,
            params: {
                channels: ['deribit_price_index.btc_usd']
            }
        };
        
        // Send the subscription request to the server
        socket.send(JSON.stringify(request));
    });
    
    // Listen for incoming messages
    socket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data);
    
        // Check if the response is a price update
        if (response.params && response.params.data && response.params.channel.includes('deribit_price')) {
            const price = response.params.data.price;
            console.log('Price update for ', response.params.channel, price);
            const priceElement = document.getElementById('bybit_BTC_Price_index');
            priceElement.innerHTML = price.toFixed(2);
    
            // Change the color of the price element based on the current price value
            if (price > lastPrice) {
                priceElement.style.color = '#ffabfc'; // Green color
            } else if (price < lastPrice) {
                priceElement.style.color = '#ffabfc'; // Red color
            } else {
                priceElement.style.color = '#ffabfc'; // Blue color
            }
    
            lastPrice = price;
        }
    });
    }

}




   
    
    
// Bybit Index Number





































// Bitmex Exchange Start








// Bitmex BTC real time price Start 

const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument:XBTUSD');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.table === 'instrument') {
    const lastPriceObj = data.data[0];
    if (lastPriceObj && lastPriceObj.lastPrice) {
      const lastPrice = parseFloat(lastPriceObj.lastPrice).toFixed(2);
      const priceElement = document.getElementById('bitmex_BTC_real__price');
      if (lastPrice > priceElement.innerText) {
        // Price went up
        priceElement.style.color = '#77ccff';
      } else if (lastPrice < priceElement.innerText) {
        // Price went down
        priceElement.style.color = '#77ccff';
      } else {
        // Price stayed the same
        priceElement.style.color = '#77ccff';
      }
      priceElement.innerText = lastPrice;
    }
  }
};











// Bitmex BTC  index Star





{
    const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument:XBTUSD');
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.table === 'instrument') {
        const askPriceObj = data.data[0];

        if (askPriceObj && askPriceObj.askPrice) {
          const askPrice = parseFloat(askPriceObj.askPrice).toFixed(2);
          const priceElement = document.getElementById('bitmex__BTC_index_price');
          console.log(data)
          if (askPrice > priceElement.innerText) {
            // Price went up
            priceElement.style.color = '#ffabfc';
          } else if (askPrice < priceElement.innerText) {
            // Price went down
            priceElement.style.color = '#ffabfc';
          } else {
            // Price stayed the same
            priceElement.style.color = '#ffabfc';
          }
          priceElement.innerText = askPrice;
        }
      }
    };
    
    }






























    // Okex api is not work  we will make it latter 


































































    // DERIBIT BTC Start 






{
    // Create a WebSocket connection
    const socket = new WebSocket('wss://www.deribit.com/ws/api/v2');
    let lastPrice = 0; // Define initial value for lastPrice
    
    // Listen for when the connection is opened
    socket.addEventListener('open', (event) => {
        console.log('WebSocket connected.');
    
        // Subscribe to funding rate updates for BTC-PERPETUAL contract
        const request = {
            jsonrpc: '2.0',
            method: 'public/subscribe',
            id: 1,
            params: {
                channels: ['deribit_price_index.btc_usd']
            }
        };
        
        // Send the subscription request to the server
        socket.send(JSON.stringify(request));
    });
    
    // Listen for incoming messages
    socket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data);
    
        // Check if the response is a price update
        if (response.params && response.params.data && response.params.channel.includes('deribit_price_index.')) {
            const price = response.params.data.price;
            console.log('Price update for ', response.params.channel, price);
            const priceElement = document.getElementById('deribit_BTC_real__price');
            priceElement.innerHTML = price.toFixed(2);
    
            // Change the color of the price element based on the current price value
            if (price > lastPrice) {
                priceElement.style.color = '#77ccff'; // Green color
            } else if (price < lastPrice) {
                priceElement.style.color = '#77ccff'; // Red color
            } else {
                priceElement.style.color = '#77ccff'; // Blue color
            }
    
            lastPrice = price;
        }
    });
    }
















// DERIBIT BTC index price

{
    const ws = new WebSocket("wss://stream.bybit.com/realtime");
    
    ws.onopen = () => {
      console.log("WebSocket connection opened");
    
      // Subscribe to topic(s)
      ws.send(
        JSON.stringify({
          op: "subscribe",
          args: ["trade.BTCUSD"] // replace with desired topic(s)
        })
      );
    };
    
    ws.onmessage = event => {
      console.log("Received message:", event.data);
    
      const h1 = document.getElementById("deribit_BTC_index__price");
      const data = JSON.parse(event.data);
      h1.style.color = "#ffabfc";

      const price =
        data.data && data.data.length > 0 ? data.data[0].price : "";
      if (price) {
        h1.textContent =price;
      }
    };
    
    ws.onclose = event => {
      console.log("WebSocket connection closed");
    
      // Handle closed connection
      // ...
    };
    
    ws.onerror = error => {
      console.error("WebSocket error:", error);
    
      // Handle error
      // ...
    };
    }
      





















// Bybit Index Number

























    // phemex BTC Start 



// Phemex BTC Price 

{

    const socket = new WebSocket('wss://phemex.com/ws');
    const priceElement = document.getElementById('phemex_BTC_price');
    
    socket.onopen = () => {
      socket.send(JSON.stringify({
        id: 112,
        method: 'trade.subscribe',
        params: ['BTCUSD']
      }));
    
      socket.send(JSON.stringify({
        id: 1234,
        method: 'kline.subscribe',
        params: []
      }));
    
      setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({
            id: 1234,
            method: 'server.ping',
            params: ['trading.BTCUSD:']
          }));
        }
      }, 10000);
    };
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      let priceColor = '#77ccff';
    
      if ('market24h' in data || 'trades' in data) {
        const lastPrice = String(data.market24h?.[0]?.last || data.trades?.[0]?.[2]);
        priceElement.innerHTML = lastPrice.substring(0, lastPrice.length - 4);
    
        if (priceElement.dataset.lastPrice) {
          const lastPriceNum = Number(priceElement.dataset.lastPrice);
          const currentPriceNum = Number(lastPrice.substring(0, lastPrice.length - 4));
    
          if (lastPriceNum < currentPriceNum) {
            priceColor = '#77ccff';
          } else if (lastPriceNum > currentPriceNum) {
            priceColor = '#77ccff';
          }else{
            priceColor = '#77ccff';
          }
        }
    
        priceElement.dataset.lastPrice = lastPrice.substring(0, lastPrice.length - 4);
      }
    
      priceElement.style.color = priceColor;
    };
    
    socket.onclose = () => {};
    
   

}



















  // Phemex BTC Index  Price
  
  var pubPhemexWs = new WebSocket("wss://phemex.com/ws");
  
  function mexPing() {
    if (!pubPhemexWs) return;
    if (pubPhemexWs.readyState !== 1) return;
    pubPhemexWs.send(
      JSON.stringify({
        id: 1234,
        method: "server.ping",
        params: ["trading.BTCUSD:"],
      })
    );
    // console.log("mex Ping");
    setTimeout(mexPing, 10000);
  }
  
  function appendPhemexPublicTickersData(data) {
    // Replace this with your implementation that updates the DOM with the ticker data
    console.log("Appending ticker data:", data);
  }
  
  function appendPhemexPublicLastPriceData(data) {
    let lastPrice = "";
    if ("market24h" in data && Array.isArray(data.market24h)) {
      lastPrice = String(data.market24h[0].last);
    } else if ("trades" in data && Array.isArray(data.trades)) {
      lastPrice = String(data.trades[0][2]);
    }
    console.log("Appending last price data:", lastPrice);
    const priceElement = document.getElementById('phemex_BTC__index_price');
    priceElement.innerHTML = lastPrice.substring(0, lastPrice.length - 4);
    priceElement.style.color = "#ffabfc";
  }
  
  pubPhemexWs.onopen = function () {
    pubPhemexWs.send(
      JSON.stringify({
        id: 112,
        method: "trade.subscribe",
        params: ["BTCUSD"],
      })
    ),
      pubPhemexWs.send(
        JSON.stringify({
          id: 1234,
          method: "kline.subscribe",
          params: [],
        })
      ),
      mexPing();
  };
  
  pubPhemexWs.onmessage = function (e) {
    e = JSON.parse(e.data);
    if ("market24h" in e) appendPhemexPublicLastPriceData(e);
    if ("trades" in e) appendPhemexPublicLastPriceData(e);
  };
  
  pubPhemexWs.onclose = function () {};
  var pubPhemexWs = new WebSocket("wss://phemex.com/ws");
  
  function mexPing() {
    if (!pubPhemexWs) return;
    if (pubPhemexWs.readyState !== 1) return;
    pubPhemexWs.send(
      JSON.stringify({
        id: 1234,
        method: "server.ping",
        params: ["trading.BTCUSD:"],
      })
    );
    // console.log("mex Ping");
    setTimeout(mexPing, 10000);
  }
  
  function appendPhemexPublicTickersData(data) {
    // Replace this with your implementation that updates the DOM with the ticker data
    console.log("Appending ticker data:", data);
  }
  
  function appendPhemexPublicLastPriceData(data) {
    let lastPrice = "";
    if ("market24h" in data && Array.isArray(data.market24h)) {
      lastPrice = String(data.market24h[0].last);
    } else if ("trades" in data && Array.isArray(data.trades)) {
      lastPrice = String(data.trades[2][2]);
    }
    console.log("Appending last price data:", lastPrice);
    const priceElement = document.getElementById('phemex_BTC__index_price');
    priceElement.innerHTML = lastPrice.substring(0, lastPrice.length - 4);
    priceElement.style.color = "#ffabfc";
  }
  
  pubPhemexWs.onopen = function () {
    pubPhemexWs.send(
      JSON.stringify({
        id: 112,
        method: "trade.subscribe",
        params: ["BTCUSD"],
      })
    ),
      pubPhemexWs.send(
        JSON.stringify({
          id: 1234,
          method: "kline.subscribe",
          params: [],
        })
      ),
      mexPing();
  };
  
  pubPhemexWs.onmessage = function (e) {
    e = JSON.parse(e.data);
    if ("market24h" in e) appendPhemexPublicLastPriceData(e);
    if ("trades" in e) appendPhemexPublicLastPriceData(e);
  };
  
  pubPhemexWs.onclose = function () {};
  

  






































// ETHUSD Start

















// biance real time price Start 
{
const binanceSocketETH = new WebSocket('wss://fstream.binance.com/ws@aggTrades');
const binance_price=  document.getElementById("binance__ETH_real__price")
let lastPrice=null
const symbol = 'ethusdt'; // replace with the symbol you want to subscribe to

const message = JSON.stringify({
  "method": "SUBSCRIBE",
  "params":
    [`${symbol}@ticker`],
  "id": 1
});

binanceSocketETH.onopen = () => {
  console.log('WebSocket connection opened');
  binanceSocketETH.send(message);
};

binanceSocketETH.onmessage = (event) => {
  const data = JSON.parse(event.data);
  let Price=innerText= (data.c)
  console.log(data);

binance_price.innerText= Price
binance_price.style.color=!lastPrice || lastPrice === Price ? "#77ccff": Price > lastPrice ? '#77ccff':'#77ccff'
lastPrice=Price
};

binanceSocketETH.onerror = (error) => {
  console.error(`WebSocket error: ${error}`);
};

// Unsubscribe from the BTCUSDT ticker stream
const unsubscriptionMessage = JSON.stringify({
    "method": "UNSUBSCRIBE",
    "params": [
      "ethusdt@ticker"
    ],
    "id": 2
  });
  












   // binance Index ETH price 



   {
    const binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1s');
    const binancePrice = document.getElementById("binance__ETH__index_price");
    let indexPrice = null;
    const symbol = 'ethusdt'; // replace with the symbol you want to subscribe to
    
    const message = JSON.stringify({
      "method": "SUBSCRIBE",
      "params": [`${symbol}@ticker`],
      "id": 1
    });
    
    binanceSocket.onopen = () => {
      console.log('WebSocket connection opened');
      binanceSocket.send(message);
    };
    
    binanceSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      let price = parseFloat(data.k.o).toFixed(2);
      console.log(data);
    
      // compare the current and previous prices and update color
      if (indexPrice !== null) {
        if (price > indexPrice) {
          binancePrice.style.color = "#ffabfc";
        } else if (price < indexPrice) {
          binancePrice.style.color = "#ffabfc";
        } else {
          binancePrice.style.color = "#ffabfc";
        }
      }
    
      binancePrice.innerText = price;
      indexPrice = price;  
    };
    
    binanceSocket.onerror = (error) => {
      console.error(`WebSocket error: ${error}`);
    };
    
  }
}


































// Bybit Exchange Start




// Bybit real Price Start


{

const ws = new WebSocket("wss://stream.bybit.com/realtime");

ws.onopen = () => {
  console.log("WebSocket connection opened");

  // Subscribe to topic(s)
  ws.send(
    JSON.stringify({
      op: "subscribe",
      args: ["trade.ETHUSD"] 
    })
  );
};

ws.onmessage = event => {
  console.log("Received message:", event.data);

  const h1 = document.getElementById("Bybit__ETH_real__price");
  const data = JSON.parse(event.data);
  h1.style.color = "#77ccff";

  const price =
    data.data && data.data.length > 0 ? data.data[0].price : "";
  if (price) {
    h1.textContent =  price;
  }
};

ws.onclose = event => {
  console.log("WebSocket connection closed");

  // Handle closed connection
  // ...
};

ws.onerror = error => {
  console.error("WebSocket error:", error);

  // Handle error
  // ...
};







// Bybit index Price 





{
    const socket = new WebSocket('wss://www.deribit.com/ws/api/v2');
    let lastPrice = 0;// bybit index price 
    
    
    // Listen for when the connection is opened
    socket.addEventListener('open', (event) => {
        console.log('WebSocket connected.');
    
        // Subscribe to funding rate updates for BTC-PERPETUAL contract
        const request = {
            jsonrpc: '2.0',
            method: 'public/subscribe',
            id: 1,
            params: {
                channels: ['deribit_price_index.eth_usd']
            }
        };
        
        // Send the subscription request to the server
        socket.send(JSON.stringify(request));
    });
    
    // Listen for incoming messages
    socket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data);
    
        // Check if the response is a price update
        if (response.params && response.params.data && response.params.channel.includes('deribit_price')) {
            const price = response.params.data.price;
            console.log('Price update for ', response.params.channel, price);
            const priceElement = document.getElementById('Bybit__ETH__index_price');
            priceElement.innerHTML = price.toFixed(2);
    
            // Change the color of the price element based on the current price value
            if (price > lastPrice) {
                priceElement.style.color = '#ffabfc'; // Green color
            } else if (price < lastPrice) {
                priceElement.style.color = '#ffabfc'; // Red color
            } else {
                priceElement.style.color = '#ffabfc'; // Blue color
            }
    
            lastPrice = price;
        }
    });
    }

}




   
    
    
// Bybit Index Number
































{
// Bitmex Exchange Start








// Bitmex ETH real time price Start 

const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument:ETHUSD');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.table === 'instrument') {
    const lastPriceObj = data.data[0];
    if (lastPriceObj && lastPriceObj.lastPrice) {
      const lastPrice = parseFloat(lastPriceObj.lastPrice).toFixed(2);
      const priceElement = document.getElementById('Bitbix__ETH_real__price');
      if (lastPrice > priceElement.innerText) {
        // Price went up
        priceElement.style.color = '#77ccff';
      } else if (lastPrice < priceElement.innerText) {
        // Price went down
        priceElement.style.color = '#77ccff';
      } else {
        // Price stayed the same
        priceElement.style.color = '#77ccff';
      }
      priceElement.innerText = lastPrice;
    }
  }
};











// Bitmex BTC  index Star





{
    const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument:ETHUSD');
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.table === 'instrument') {
        const askPriceObj = data.data[0];

        if (askPriceObj && askPriceObj.askPrice) {
          const askPrice = parseFloat(askPriceObj.askPrice).toFixed(2);
          const priceElement = document.getElementById('Bitmex__ETH__index_price');
          console.log(data)
          if (askPrice > priceElement.innerText) {
            // Price went up
            priceElement.style.color = '#ffabfc';
          } else if (askPrice < priceElement.innerText) {
            // Price went down
            priceElement.style.color = '#ffabfc';
          } else {
            // Price stayed the same
            priceElement.style.color = '#ffabfc';
          }
          priceElement.innerText = askPrice;
        }
      }
    };
    
    }
}






















{



    // Okex api is not work  we will make it latter 


   // Create a WebSocket instance
   const socket = new WebSocket('wss://ws.bitstamp.net');

   // Listen for the 'open' event
   socket.addEventListener('open', (event) => {
     console.log('WebSocket connected:', event);
   
     // Subscribe to the desired channels
     socket.send(JSON.stringify({
       event: 'bts:subscribe',
       data: {
         channel: 'live_trades_btcusd' // Example channel, you can change it to any other available channels
       }
     }));
   });
   
   // Listen for the 'message' event
   socket.addEventListener('message', (event) => {
     const data = JSON.parse(event.data);
     console.log('WebSocket message:', data);
   
     // Handle the received data
     // Example: Extract the price from the live trades channel
     if (data.channel === 'live_trades_btcusd') {
       const price = data.data.price;
       console.log('BTC/USD Price:', price);
       document.getElementById("okex_BTC_price").innerHTML=price
   
       // You can do whatever you want with the price data here
     }
   });
   
   // Listen for the 'close' event
   socket.addEventListener('close', (event) => {
     console.log('WebSocket disconnected:', event);
   });
   
   // Listen for the 'error' event
   socket.addEventListener('error', (event) => {
     console.error('WebSocket error:', event);
   });
   


{
  const dataHeading = document.getElementById('okex_BTC_index');

  // Create a new WebSocket object
  const socket = new WebSocket('wss://ws.kraken.com');
  
  // Connection opened event
  socket.onopen = function () {
    console.log('WebSocket connection established.');
  
    // Subscribe to the desired data feed
    const subscriptionMessage = JSON.stringify({
      event: 'subscribe',
      pair: ['XBT/USD'], // Example trading pair
      subscription: {
        name: 'ticker',
      },
    });
  
    socket.send(subscriptionMessage);
  };
  
  // Message received event
  socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log('Received data:', data);
  
    // Update the inner HTML of the heading with the received data
    if (data && data[1] && data[1].c) {
      const tickerPrice = parseFloat(data[1].c[0]).toFixed(2);
      dataHeading.innerText = tickerPrice;
    }
  };
  
  // Connection closed event
  socket.onclose = function (event) {
    console.log('WebSocket connection closed with code:', event.code);
  };
  
  // Error event
  socket.onerror = function (error) {
    console.error('WebSocket error:', error);
  };
  
}



  }




































    





















































          


























































































































  
  
  





















































































































































