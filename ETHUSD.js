

//  ETHUSD Price 





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
                const priceElement = document.getElementById('deribit__real__price');
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
        
          const h1 = document.getElementById("deribit_ETH_index__price");
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
          










































































{
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
                if (response.params && response.params.data && response.params.channel.includes('deribit_price_index.')) {
                    const price = response.params.data.price;
                    console.log('Price update for ', response.params.channel, price);
                    const priceElement = document.getElementById('deribit_ETH_real__price2022');
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
        
          }
        
        
        
        
        
        
        
        
        
        
        
        
        {

        // DERIBIT BTC index price
        
        
            const ws = new WebSocket("wss://stream.bybit.com/realtime");
            
            ws.onopen = () => {
              console.log("WebSocket connection opened");
            
              // Subscribe to topic(s)
              ws.send(
                JSON.stringify({
                  op: "subscribe",
                  args: ["trade.ETHUSD"] // replace with desired topic(s)
                })
              );
            };
            
            ws.onmessage = event => {
              console.log("Received message:", event.data);
            
              const h1 = document.getElementById("deribit_ETH_index__price");
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





{


  
}










































































































































































          
            

// Phemex BTC Price 

{

  const socket = new WebSocket('wss://phemex.com/ws');
  const priceElement = document.getElementById('phemex_ETH_Index__price');
  
  socket.onopen = () => {
    socket.send(JSON.stringify({
      id: 112,
      method: 'trade.subscribe',
      params: ['ETHUSD']
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






  
// Phemex BTC Price 

{

  const socket = new WebSocket('wss://phemex.com/ws');
  const priceElement = document.getElementById('phemex_ETH_real__price');
  
  socket.onopen = () => {
    socket.send(JSON.stringify({
      id: 112,
      method: 'trade.subscribe',
      params: ['ETHUSD']
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
          params: ['trading.ETHUSD:']
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
       channel: 'live_trades_ethusd' // Example channel, you can change it to any other available channels
     }
   }));
 });
 
 // Listen for the 'message' event
 socket.addEventListener('message', (event) => {
   const data = JSON.parse(event.data);
   console.log('WebSocket message:', data);
 
   // Handle the received data
   // Example: Extract the price from the live trades channel
   if (data.channel === 'live_trades_ethusd') {
     const price = data.data.price;
     console.log('BTC/USD Price:', price);
     document.getElementById("okex_ETH_price").innerHTML=price
 
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
const dataHeading = document.getElementById('okex_ETH_index');

// Create a new WebSocket object
const socket = new WebSocket('wss://ws.kraken.com');

// Connection opened event
socket.onopen = function () {
  console.log('WebSocket connection established.');

  // Subscribe to the desired data feed
  const subscriptionMessage = JSON.stringify({
    event: 'subscribe',
    pair: ['ETH/USD'], // Example trading pair
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
