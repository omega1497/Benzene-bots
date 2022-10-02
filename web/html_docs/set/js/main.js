	var mqtt;
	var reconnectTimeout = 2000;
	var host="localhost";
	var port=8083;
	
	var trucks =[];
	
	function onFailure(message) {
		console.log("Connection Attempt to Host "+host+"Failed");
		setTimeout(MQTTconnect, reconnectTimeout);
	}
	function onMessageArrived(msg){
		out_msg="Message received "+msg.payloadString+"<br>";
		out_msg=out_msg+"Message received Topic "+msg.destinationName;
		console.log(out_msg);
		if (!trucks.find(o => o === msg.payloadString))
		{
			trucks.push(msg.payloadString);
		}
		trucks.sort();
		document.getElementById("trucks").innerHTML="Trucks:"+trucks.toString();
		document.getElementById("master-truck").innerHTML="Master Truck:"+trucks[0];
		console.log(trucks);
		console.log("end");
	}
	
	function onConnect() {
		// Once a connection has been made, make a subscription and send a message.

		console.log("Connected ");
		mqtt.subscribe("register");
		mqtt.subscribe("unregister");
  }
  
  function MQTTconnect() {
	console.log("connecting to "+ host +" "+ port);
	var x=Math.floor(Math.random() * 10000); 
	var cname="setform-"+x;
	mqtt = new Paho.MQTT.Client(host,port,cname);
	//document.write("connecting to "+ host);
	var options = {
		timeout: 3,
		onSuccess: onConnect,
		onFailure: onFailure,
		 };
	mqtt.onMessageArrived = onMessageArrived
	mqtt.connect(options); //connect
	}
	
$(document).ready(function() {
	MQTTconnect();
    $(document).on('submit', '#speed-form', function() {
	  if(trucks.length<1)
	  {
		  alert("No trucks online");
		  return false;
	  }
	  var speed = $("#speed").val();
	  console.log(speed);
	  message = new Paho.MQTT.Message(speed);
	  message.destinationName = trucks[0]+"/set/speed";
	  mqtt.send(message);
      return false;
     });
	 
	 $(document).on('submit', '#accel-form', function() {
	  if(trucks.length<1)
	  {
		  alert("No trucks online");
		  return false;
	  }
	  var accel = $("#accel").val();
	  console.log(accel);
	  message = new Paho.MQTT.Message(accel);
	  message.destinationName = trucks[0]+"/set/accel";
	  mqtt.send(message);
      return false;
     });
	 
	 $(document).on('submit', '#brakes-form', function() {
	  if(trucks.length<1)
	  {
		  alert("No trucks online");
		  return false;
	  }
	  var brakes = $("#brakes").val();
	  console.log(brakes);
	  message = new Paho.MQTT.Message(brakes);
	  message.destinationName = trucks[0]+"/set/brakes";
	  mqtt.send(message);
      return false;
     });
});