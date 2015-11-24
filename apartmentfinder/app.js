(function(){
var app = angular.module('APARTFIND',[]);

app.controller('ApartmentController', function(){
this.apartmentype = apartments;
this.tab = 1;

this.selectTab = function(setTab){
	//alert(setTab);
  this.tab = setTab;
};

this.isSelected = function(checkTab){
 return this.tab === checkTab;
};

});

var apartments =[
  {
	name: 'Premium',
	price: 800,
	description:'A luxury 1 bHK with all basic amenities',
	isAvailable: true,
	isBooked: false,
	images:[
		{
		full:'images/Premium.png',
	    }
	],
	  reviews:[{
		  stars: "3",
		  body: "3 Star review",
		  author:"test@test.com"
	  }]
  },
  {
	name: 'Montana',
	price: 950,
	description:'A luxury 1 bHK with all basic amenities and an adiitional den',
	isAvailable: true,
	isBooked: false,
	images:[
		{
		full:'images/Montana.png',
	    }
	],
	  reviews:[{
		  stars:"4",
		  body: "4 Star review",
		  author:"test@test.com"
	  }]
  }
]

app.controller('TabController', function(){
this.tab = 1;

this.setTab = function(selectedTab){
	//alert(setTab);
  this.tab = selectedTab;
};

this.isSet = function(selectedTab){
 return this.tab === selectedTab;
};

});

})();