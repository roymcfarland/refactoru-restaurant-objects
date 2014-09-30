
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name || 'Not named';
	this.calories = calories || 0;
	this.vegan = vegan || false;
	this.glutenFree = glutenFree || false;
	this.citrusFree = citrusFree || false;
};

FoodItem.prototype.toString = function(){
	var veganResult = (this.vegan === true) ? 'is vegan.': ' is not vegan.';
	var glutenResult = (this.glutenFree === true) ? 'is glutenFree.': ' is not glutenFree.';
	var citrusResult = (this.citrusFree === true) ? 'is citrusFree.': 'is not citrusFree.';
	return this.name + ' has ' + this.calories + ' calories.' + ' ' + veganResult + ' ' + glutenResult + ' ' + citrusResult;	
};

var Edibles = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

//same as Edibles
//	(name, description, price, ingredients)
var Drink = function() {
	Edibles.apply(this, arguments);
};

Drink.prototype = new Edibles();
Drink.prototype.constructor = Drink;

var Plate = function() {
	Edibles.apply(this, arguments);
};

Plate.prototype =  new Edibles();
Plate.prototype.constructor = Plate;

var Order = function(plates) {
	this.plates = plates;
};

var Menu = function(plates) {
	this.plates = plates;
};

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};

var lettuce = new FoodItem('lettuce', 0, true, true, true);
var frenchToast = new FoodItem('french toast', 1000, false, false, true);
var orange = new FoodItem('orange', 25, true, true, false);
var patron = new FoodItem('tequila', 100, true, true, true);
var dogMeat = new FoodItem('chijuaja', 500, false, true, true);
var avocado = new FoodItem('aguacate', 200, true, true, true);
var salt = new FoodItem('sal', 0, true, true, true);
var cayenne = new FoodItem('cayenne peppa', 0, true, true, true);
var tortillaChips = new FoodItem('totopos de maiz', 250, false, false, true);
var beans = new FoodItem('porotos', 350, true, false, true);
var rice = new FoodItem('arroz', 271, true, false, true);
var mixer = new FoodItem('mezcla', 150, true, true, false);
var margarita = new Drink('Margarita', 'Alcoholic Beverage', 10, [patron, mixer, salt]);
var burrito = new Plate('Burrito', 'Mexican Food', 3, [frenchToast, lettuce, cayenne, beans, rice]);
var guacamole = new Plate('guacamole', 'Mexican Food Dip', 1, [avocado, salt, cayenne]);

/////////////////////////////////////////////////////

Drink.prototype.toString = function(){
	var bustedOut = this.ingredients.join(', ');
	return this.name + ' is ' + this.description + ' and costs ' + this.price + ' and is made of ' + bustedOut;
};

Plate.prototype.toString = function(){
	var bustedOut = this.ingredients.join(', ');
	return this.name + ' is ' + this.description + ' and costs ' + this.price + ' and is made of ' + bustedOut;
};

Order.prototype.toString = function(){
	var bustedOut = this.plates.join(', ');
	return bustedOut;
};

Menu.prototype.toString = function(){
	var bustedOut = this.plates.join(', ');
	return bustedOut;
};

Restaurant.prototype.toString = function(){
	return this.name + ' is ' + this.description + this.menu;
};

Customer.prototype.toString = function(){
	return this.dietaryPreference;
};

/////////////////////////////////////////////////////

Plate.prototype.isVegan = function(value){
	this.isVegan = value;
};

Plate.prototype.isGlutenFree = function(value){
	this.isGlutenFree = value;
};

Plate.prototype.isCitrusFree = function(value){
	this.isCitrusFree = value;
};

/////////////////////////////////////////////////////

var newMenu = new Menu([burrito, guacamole, margarita]);

var muyBuenaRestaurante = new Restaurant('Muy Buena Restaurante', 'The Best Restaurant in the Barrio', newMenu);

/////////////////////////////////////////////////////

FoodItem.prototype.create = function() {
	if (this.element) return this.element;
	this.element = $('<li>' + this.name + '</li>');
	return this.element;
};



// Drink.prototype.create = function() {
// 	if (this.element) return this.element;
// 	// console.log(this);
// 	// 
// 	this.element = $('<div>');
// 	this.element
// 		.append('<h3>' + this.name + '</h3>')
// 		.append('<ul>');
// 	// $('.bebida-container').append('<div><h3>' + this.name + '</h3><ul></ul></div>');
	
// 		for (var i = 0; i < this.ingredients.length; i++) {
// 		var fuckinfoodItem = this.ingredients[i].create();
// 		this.element.find('ul').append(fuckinfoodItem);
// 	};
// 	return this.element;
// };

Edibles.prototype.create = function() {
	if (this.element) return this.element;

	this.element = $('<div>');
	this.element
		.append('<h3>' + this.name + '</h3>')
		.append('<ul>');
	// $('.plato-container').append('<div><h3>' + this.name + '</h3><ul></ul></div>');

		for (var i = 0; i < this.ingredients.length; i++) {
		var fuckinfoodItem = this.ingredients[i].create();
		this.element.find('ul').append(fuckinfoodItem);
		};
	return this.element;
};

Menu.prototype.create = function() {
	if (this.element) return this.element;

	this.element = $('.contenador-del-menu');
	this.element
		.append('<h3>' + this.name + '</h3>')
		.append('<ul>');
	// $('.plato-container').append('<div><h3>' + this.name + '</h3><ul></ul></div>');

		for (var i = 0; i < this.plates.length; i++) {
		var plateItem = this.Edibles[i].create();
		console.log();
		this.element.find('ul').append(plateItem);
		};
	return this.element;
}

//TypeError: Cannot read property '0' of undefinedmessage: "Cannot read property '0' of undefined"stack: (...)get stack: function () { [native code] }set stack: function () { [native code] }__proto__: Errorconstructor: function TypeError() { [native code] }arguments: nullcaller: nulllength: 1name: "TypeError"prototype: Errorconstructor: function TypeError() { [native code] }arguments: nullcaller: nulllength: 1name: "TypeError"prototype: Error__proto__: function Empty() {}<function scope>name: "TypeError"stack: undefined__proto__: d__proto__: function Empty() {}<function scope>name: "TypeError"stack: undefined__proto__: d


$(document).on('ready', function() {

$('.plato-container').append(margarita.create())
$('.plato-container').append(burrito.create())

});








