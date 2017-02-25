var temperature=0;
var windSpeed=0;
var humid=0;
var normFeel="neither";
var outfit=0;
var link;

function fetchingWeather(cityName, countryName, normFeel) {
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"," +countryName + "&appid=004a87eeec98aaa0d73962e75d3e0a94";
    
    $.ajax({
        url: link,
    })
    
  .done(function( response ) {
        console.log(response);
    temperature = response.main.temp;
            windSpeed = response.wind.speed;
            humid = response.main.humidity;
            var localWeather = { temperature, windSpeed, humid };        
        
        printPicture(temperature, windSpeed, humid, normFeel);
  });
    
};

console.log('hello', fetchingWeather('Philadelphia', 'us'));
console.log(temperature);



//Start of actually deciding whats going to popup 

pickOutfit: function(temperature, windspeed, humid, normFeel)
{
    
    if(temperature>85)
    {
        outfit=1;
    }

    if(temperature>75||temperature<=85)
    {
        outfit=2;
    }

    if(temperature>50||temperature<=75)
    {
        outfit=3;
    }

    if(temperature>32||temperature<=50)
    {
        outfit=4;
    }

    if(temperature<32)
    {
        
        outfit=5;
    }

    if(normFeel=="hot"&&outfit>1)
    {
        outfit--;
    }

    if(normFeel=="cold"&&outfit<5)
    {
        outfit++;
    }

    if(windspeed>10&&outfit<5)
    {
        outfit++;
    }

    if(windspeed>30&&outfit<5)
    {
        outfit++;
    }

    if(humid>=45&&outfit>1)
    {
        outfit--;
    }
    return outfit;
}

// This method picks the picture we are going to put on the website The pictures go through the outfits and then adds an umbrella if needed. 
printPicture: function(temperature, windSpeed, humid, normFeel)
{
    outfit=pickOutfit(temperature, windSpeed, humid, normFeel);
    //first outfit this is a tanktop and shorts 
    if(outfit==1)
    {
        var img1 = new Image();
        var div = document.getElementByID('outfitDiv');
        
        img1.onload = function()
        {
            div.apendChild(img1);
            
        };
        
        img1.src = 'Picture1.jpg';
    }
    
    //this is the second out fit that consists of a tshit and shorts 
    if(outfit==2)
    {
        var img2 = new Image();
        var div = document.getElementByID('outfitDiv');
        
        img2.onload = function()
        {
            div.apendChild(img2);
            
        };
        
        img2.src = 'Picture2.jpg';
    }
    
    //this is the thrid outfit it includes 
    if(outfit==3)
    {
        var img3 = new Image();
        var div = document.getElementByID('outfitDiv');
        
          img3.src = 'Picture3.jpg';
        img3.onload = function()
        {
            div.appendChild(img3);
            
        };
        
        
    }
    
    //this is the fourth image it is a long sleve shirt and pants 
    if(outfit==4)
    {
        var img4 = new Image();
        var div = document.getElementByID('outfitDiv');
        
        img4.onload = function()
        {
            div.apendChild(img4);
            
        };
        
        img4.src = 'Picture4.jpg';
    }
    
    //this is the fifth image and this is every possible layer know to man 
    if(outfit==5)
    {
        var img5 = new Image();
        var div = document.getElementByID('outfitDiv');
        
        img5.onload = function()
        {
            div.apendChild(img5);
            
        };
        
        img5.src = 'Picture5.jpg';
    }
}
 

