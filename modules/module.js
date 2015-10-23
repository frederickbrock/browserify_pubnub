
//comment
var EventEmitter = require('events').EventEmitter;

module.exports = (function(){
	

	var pubnub = require('pubnub');
	var pn = pubnub.init({ subscribe_key: "demo", publish_key: "demo"});
	var cb = function(m){ 
		var time = m.time,
		    price = m.price,
		    delta = m.delta,
		    vol = m.vol;

		document.getElementById('time').innerHTML = time;
		document.getElementById('price').innerHTML = price;
		document.getElementById('delta').innerHTML = delta;
		document.getElementById('vol').innerHTML = vol;
    };
	pn.subscribe({ channel: "MSFT", callback: cb});
})()

