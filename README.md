Chrome Extension Socket
=======================
This provides and easy way to communicate continously between an extension popup and background page using the [chrome.extension* API](http://code.google.com/chrome/extensions/extension.html). 

How To Use
----------
Just add socket.js to your project and include it in both the popup page and the background page. 
The socket connection will be automatically create each time the popup window is opened.
Just implement the noted functions in socket.js and you are done.
An example extension and its source can be found in the `example` directory.

API
---
+ **popupMessageReceived(msg)**<br/>
Triggered when the extension popup receives a message from the extension background page.  Executes on the extension popup.
    
+ **backgroundMessageReceived(msg)**<br/>
Triggered when extension background page receives a message from the extension popup.  Executes on the extension background page.

+ **taskReceived(msg)**<br/>
Triggered when the extension background page receives a new task message.  Executes on the extension background page.

+ **taskStarted()**<br/>
Triggered when an extension background task is started.  Executes on the extension popup.

+ **taskComplete()**<br/>
Triggered when all extension background tasks have been completed.  Executes on the extension popup.
    
License
-------
- [MIT](http://www.opensource.org/licenses/mit-license.php)

    