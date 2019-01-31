function webSocket() {
            
    if ("WebSocket" in window) {
       alert("WebSocket is supported by your Browser!");
       
       // Let us open a web socket
       var ws = new WebSocket("ws://html5rocks.websocket.org/echo");
        
       ws.onopen = function() {
          
          // Web Socket is connected, send data using send()
          ws.send("Message from websocket: Pawel is saying Hello World!");
          alert("Message is sent...");
       };
        
       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          var msgOutput = document.getElementById("socketOutput");
          msgOutput.innerHTML = received_msg;
       };
        
       ws.onclose = function() { 
          
          // websocket is closed.
          //alert("Connection closed.");
       };
    } else {
      
       // The browser doesn't support WebSocket
       alert("WebSocket NOT supported by your Browser!");
    }
 }