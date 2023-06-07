











// BTCUSD Funding Rate






  // bitmex BTC Funding rate 1 start
  {
      const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument:ETHUSD');
  
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.table === 'instrument') {
          const fundingRateObj = data.data[0];
          
          if (fundingRateObj && fundingRateObj.fundingRate){
            const fundingRate = parseFloat(fundingRateObj.fundingRate * 100).toFixed(4); // Convert to float and format to 4 decimal places with a % symbol
            
            let color;
            if (fundingRate > 0.01) { // Green if funding rate is greater than 0.01%
              color = 'green';
            } else if (fundingRate < -0.01) { // Red if funding rate is less than -0.01%
              color = 'red';
            } else { // White otherwise
              color = ' #ccd29b ';
            }
            
            const formattedFundingRate = fundingRate > 0 ? `${fundingRate}` : fundingRate; // Add + sign for positive and leave as is for negative funding rates
            
            console.log(`Funding Rate: ${formattedFundingRate}%`);
            
            const fundingRateElement = document.getElementById('bitmex_ETH_Funding_rate11');
            fundingRateElement.innerHTML = `${formattedFundingRate}%`;
            fundingRateElement.style.color = color; // Set the color of the funding rate element
          }
        }
      };
      
  
  // bitmex BTC Funding rate 1 start
  
  
  
  
  // bitmex BTC Funding rate 2 start
  
  {
    function getFundingRate(symbol) {
        let apiEndpoint = `https://fapi.binance.com/fapi/v1/fundingRate?symbol=${symbol}`;
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            // Remove data elements between index 2 and 3
            data.splice(0, 2);
      
            let fundingRate = Number(data[1].fundingRate);
            let fundingRateElement = document.getElementById("bitmex_ETH_Funding_rate2");
            
            fundingRateElement.innerText = `${(fundingRate * 100).toFixed(4)}%`;
            
            let color;
            if (fundingRate > 0.01) { // Green if funding rate is greater than 0.01%
              color = 'green';
            } else if (fundingRate < -0.01) { // Red if funding rate is less than -0.01%
              color = 'red';
            } else { // White otherwise
              color = ' #ccd29b ';
            }
          })
          .catch(error => console.error(error));
      }
      
      getFundingRate("ETHUSDT");
    }
  
  






















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // binance real time Funing 1 Start
  {
      function getFundingRate(symbol) {
          let apiEndpoint = `https://fapi.binance.com/fapi/v1/fundingRate?symbol=${symbol}`;
          fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
              // Remove data elements between index 2 and 3
              data.splice(0, 2);
        
              let fundingRate = Number(data[97].fundingRate);
              let fundingRateElement = document.getElementById("funding_ETH_rate_binancef");
              
              fundingRateElement.innerText = `${(fundingRate * 100).toFixed(4)}%`;
              
              if (fundingRate > 0) {
                fundingRateElement.style.color = "green";
              } else if (fundingRate < 0) {
                fundingRateElement.style.color = "red";
                
                
              } else {
                fundingRateElement.style.color = "white";
              }
            })
            .catch(error => console.error(error));
        }
        
        getFundingRate("ETHUSDT");
  
        setInterval(getFundingRate, 1000);
      }
      
      // binance real time Funing 1 End
      
      
      
      
      // binance real time Funing 2 Start
      {
      function getFundingRate(symbol) {
          let apiEndpoint = `https://fapi.binance.com/fapi/v1/fundingRate?symbol=${symbol}`;
          fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
              // Remove data elements between index 2 and 3
              // data.splice(1, 3);
        
              let fundingRate = Number(data[55].fundingRate);
              console.log(data)
              let fundingRateElement = document.getElementById("binance__ETH__fuding2");
              
              fundingRateElement.innerText = `${(fundingRate * 100).toFixed(4)}%`;
              
              if (fundingRate > 0) {
                fundingRateElement.style.color = "green";
              } else if (fundingRate < 0) {
                fundingRateElement.style.color = "red";
              }
              else {
                fundingRateElement.style.color = "black";
              }
            })
            .catch(error => console.error(error));
        }
        
        getFundingRate("ETHUSDT");
        
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
  
  // bybit BTC Funding  Start
  const url = 'https://api.bybit.com/v2/public/funding/prev-funding-rate?symbol=ETHUSD&exchange=BYBIT';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const fundingRate = data.result.funding_rate;
      document.getElementById('Bybit__ETH_Funding1').textContent = ` ${fundingRate}%`;
    })
    .catch(error => console.error(error));
  
  }
  





























  const baseUrl = 'https://api.bybit.com';
  const symbol = 'ETHUSDT';
  
  fetch(`${baseUrl}/v2/public/tickers?symbol=${symbol}`)
    .then(response => response.json())
    .then(data => {
      const symbolInfo = data.result[0].funding_rate; 
      document.getElementById("bybit_eth_usdt_funding_rate2").innerHTML=symbolInfo
    })
    .catch(error => {
      console.error('Error fetching symbol info:', error.message);
    });
  






}

























































{



  {
    function getFundingRate(symbol) {
        let apiEndpoint = `https://fapi.binance.com/fapi/v1/fundingRate?symbol=${symbol}`;
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            // Remove data elements between index 2 and 3
            data.splice(0, 2);
      
            let fundingRate = Number(data[50].fundingRate);
            let fundingRateElement = document.getElementById("Okex_ETH__Funding_rate_F");
            
            fundingRateElement.innerText = `${(fundingRate * 100).toFixed(4)}%`;
            
            let color;
            if (fundingRate > 0.01) { // Green if funding rate is greater than 0.01%
              color = 'green';
            } else if (fundingRate < -0.01) { // Red if funding rate is less than -0.01%
              color = 'red';
            } else { // White otherwise
              color = ' #ccd29b ';
            }
          })
          .catch(error => console.error(error));
      }
      
      getFundingRate("ETHUSDT");
    }






    {
      function getFundingRate(symbol) {
          let apiEndpoint = `https://fapi.binance.com/fapi/v1/fundingRate?symbol=${symbol}`;
          fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
              // Remove data elements between index 2 and 3
              data.splice(0, 2);
        
              let fundingRate = Number(data[90].fundingRate);
              let fundingRateElement = document.getElementById("Okex_ETH__Funding_rate_2");
              
              fundingRateElement.innerText = `${(fundingRate * 100).toFixed(4)}%`;
              
              let color;
              if (fundingRate > 0.01) { // Green if funding rate is greater than 0.01%
                color = 'green';
              } else if (fundingRate < -0.01) { // Red if funding rate is less than -0.01%
                color = 'red';
              } else { // White otherwise
                color = ' #ccd29b ';
              }
            })
            .catch(error => console.error(error));
        }
        
        getFundingRate("ETHUSDT");
      }
}