/*
 * Chrome Extension Socket
 * <https://github.com/jjNford/chrome-extension-socket>
 * 
 * Copyright (C) 2012, JJ Ford (jj.n.ford@gmail.com)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */

(function() {

	window.Socket = {
	
		/**
		 * Init
		 */
		init: function() {
			this.tasks = 0;
			this.port = chrome.extension.connect({name: "popupToBackground"});
			this.bind();
		},
		
		/**
		 * Bind
		 */
		bind: function() {	
			
			// Attach connection listenr to port.
			chrome.extension.onConnect.addListener( function(port) {
				if(port.name === "popupToBackground") {
					Socket.port = chrome.extension.connect({name: "backgroundToPopup"});
				}
				
				// Attach messaage listener to port.
				port.onMessage.addListener( function(msg) {
					Socket.onMessage(msg);
				});
				
				// Attach disconnection listern to port.
				Socket.port.onDisconnect.addListener( function(port) {
					port.onMessage.removeListener();
					Socket.port.onMessage.removeListener();
				});
			});
		},
		
		/**
		 * On Message
		 * 
		 * Triggered when the port receives a new message.
		 * 
		 * @param msg Message received by the port.
		 */
		onMessage: function(msg) {},
		
		/**
		 * Post Message
		 * 
		 * Sends a message object through the port.
		 * 
		 * @param msg Message object to send through the port.
		 */
		postMessage: function(msg) {},
		
		/**
		 * Post Task - Posts a task to the background page, incrementing the task counter.
		 * 
		 * @param msg Message object that is send to the background page through the port.
		 */
		postTask: function(msg) {},
		
		/**
		 * Post Task Complete
		 * 
		 * Decrements the current number of background tasks running, if none are running the popup
		 * is notified that all background processing is complete.
		 */
		postTaskComplete: function() {}
	};

	Socket.init();
	
})();