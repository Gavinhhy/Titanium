var url = "http://siwei.me:3855/interface/sprites/say_hi?name=dashi";
var json;
function request(e) {

	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
			Ti.API.info("Received text :" + this.responseText);
			json = JSON.parse(this.responseText);
			//		var jsonstr=eval('(' json '')')
			Ti.API.info("===" + json);
			Ti.API.info("=== comment: " + json.comment);
			Ti.API.info("=== result: " + json.result);
			alert(json.result);
			var temp = $.my_json_result;
			//var temp = Alloy.Models.json_model;
			temp.set('result_value', ' XXXX');
//			$.index.open();
		},
		timeout : 5000
	});
	client.open("GET", url);
	client.send();
}

$.index.open();
