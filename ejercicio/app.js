$(document).ready(function(){

var mapa = $("#map");
var climat = $("#climat")
var icono = $("#icon")
var url = "https://api.darksky.net/forecast/";
var key = "6ffa57b10b8d8f9d3a135be5689f849d";
var coords = {
	stg : "-33.4488897,-70.6692655",
	ccp: "-36.8201352, -73.0443904",
	cal: "-22.4543923, -68.92938190000001",
	puq: "-53.1638329, -70.91706829999998",
}
var queryParams = ["exclude=[minutely, hourly, daily, alerts, flags]","lang=es", "units=auto"]

var image = {
	"clear-day":"https://icons.wxug.com/i/c/v4/clear.svg",
	"clear-night": "https://icons.wxug.com/i/c/v4/nt_clear.svg",
	"snow": "https://icons.wxug.com/i/c/v4/snow.svg",
	"sleet": "https://icons.wxug.com/i/c/v4/sleet.svg",
	"wind": "https://icons.wxug.com/i/c/v4/wind.svg",
	"fog": "https://icons.wxug.com/i/c/v4/fog.svg",
	"cloudy": "https://icons.wxug.com/i/c/v4/cloudy.svg",
	"partly-cloudy-day": "https://icons.wxug.com/i/c/v4/partlycloudy.svg",
	"partly-cloudy-night": "https://icons.wxug.com/i/c/v4/nt_hazy.svg",
}

/*var map = null;
var marker = null;

function initMap() {
	var location = null;
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: location
	});

	marker = new google.maps.Marker({
		position: location,
		map: map
	});
}*/

$("#select").on("change", function(){
		$.ajax({
			url: url + key + "/" + coords[$(this).val()] + "?" + queryParams[0] + "&" + queryParams[1] + "&" + queryParams[2],
			method:'GET',
			dataType:'jsonp',
		}).then(function(data) {
			climat.text(parseInt(data.currently.temperature) + "°" + data.currently.summary);
			icono.attr("src",image[data.currently.icon]);	
			console.log(data);		
		});
	})
})