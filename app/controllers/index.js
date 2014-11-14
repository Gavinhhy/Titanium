function request(e) {

	var json;
	var name = $.input.value;
	var url = "http://siwei.me:3855/interface/sprites/say_hi?name=" + name;

	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
			Ti.API.info("Received text :" + this.responseText);
			json = JSON.parse(this.responseText);
			//		var jsonstr=eval('(' json '')')
			Ti.API.info("===" + json);
			Ti.API.info("=== comment: " + json.comment);
			Ti.API.info("=== result: " + json.result);
			$.show.setText(json.result);
			Ti.API.info(name);
		},
		timeout : 5000
	});
	client.open("GET", url);
	client.send();
}

$.index.open();
