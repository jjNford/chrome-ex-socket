Chrome Extension Socket
=======================
This provides and easy way to communicate continously between an extension popup and background page using the [chrome.extension* API](http://code.google.com/chrome/extensions/extension.html). 

How To Use
----------
Just add socket.js to your project and include it in both the popup page and the background page.  The socket connection will be automatically create each time the popup window is opened.  Sending messages back and forth is very simple:

popup.html :

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Extension Popup</title>
      <script src="js/socket.js">
        
        var printNumbers(x, y, z) {
          console.log(x, y, z);
        };
        
        Socket.postMessage("window", "numberHolder", "getNumbers", []);
        
      </script>
    </head>
    <body>
    </body>
    </html>
    
background.html :  

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Extension Background Page</title>
      <script src="js/socket.js">
        
        numberHolder = {
          getNumbers: function() {
            Socket.postMessage("window", "window", "printNumbers", [12, 15, 19]);
          }
        };
        
      </script>
    </head>
    <body>
    </body>
    </html>
    
On the popup.html console you should get :

    12, 15, 19
    
License
-------
- [MIT](http://www.opensource.org/licenses/mit-license.php)

    