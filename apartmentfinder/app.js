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
	]
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
	]
  }
]


	var languageJson = [{

	},{

	},{

	}]

app.controller('PanelController', function(){
this.tab = 1;

this.selectTab = function(setTab){
	alert(setTab);
  this.tab = setTab;
};

this.isSelected = function(checkTab){
 return this.tab === checkTab;
};

});

})();