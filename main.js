$(document).ready(function(){
	$.ajax({
		//pass in here with ajax object - aka a collection of properties and values 
		//first, we need url
		//and your key 3d8c8d7e0cb9594681fd5d99a6119cf6
		url:"https://api.openweathermap.org/data/2.5/forecast?q=Taipei,tw&APPID=9c39fa3ce9d953fdd507d7d9f77093ef&lang=zh_tw&units=metric",
		// "https://api.openweathermap.org/data/2.5/find?"
		type:"GET",//different type of AJAX requests
		dataType:"JSON", // could be JSON or XML (most likely JSON)
		data:{  //breakup Jquery parameters
			q:"Taipei",
			units:"metric", //can be replaced for hw 
			appid:"3d8c8d7e0cb9594681fd5d99a6119cf6"
		},

		success: function(data){
			console.log(data);//print all the JSON to the console

			console.log(data.list[0].main.temp); //just the first one of the list, and main's temperature
			$("#temp").html("temperature:"+ data.list[0].main.temp);

			console.log(data.list[0].weather.main); 
			$("#weather").html("Weather:"+ data.list[0].weather.main);

			console.log(data.list[0].sys.dt_txt); 			
			$("#day").html("Date:"+ data.list[0].sys.dt_txt);

		},
		error: function(data, textStatus, errorThrown){
			console.log("wrong");
			console.log(errorThrown);
		}


	})
})