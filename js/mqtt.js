var mqtt    = require('mqtt');
var mongoose = require('mongoose');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

mongoose.connect('mongodb://localhost/waterFlow');

var Flow = mongoose.model('flows', { mac_address: String,
                                      date: Date,
                                      flow: String });

client.on('connect', function () {
  client.subscribe('hackathon_inatel/0200b78d3c50/waterFlow');
  //client.publish('hackathon_inatel/', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(JSON.parse(message.toString()));
  var registry = new Flow(JSON.parse(message.toString()));
  registry.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('registrado');
    }
  });
  //client.end();
});

