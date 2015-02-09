/**
 * @fileoverview Angular service for managing animals and data model for animal.
<% if (isVendor) { %> * @author <%= agencyName %> (<%= agencyPOC %>)<% } %>
 */
goog.provide('boilerplateNg.MyService');
goog.provide('boilerplateNg.MyService.Animal');



/**
 * Angular service that ...
 * @constructor
 * @ngInject
 * @export
 */
boilerplateNg.MyService = function() {

  /**
   * Description here.
   * @type {Array.<boilerplateNg.MyService.Animal>}
   * @export
   */
  this.animals = [];

  this.init_();
};


/**
 * Initializes the service with some starting data.
 * @private
 */
boilerplateNg.MyService.prototype.init_ = function() {
  this.addAnimal('pony', 'gray');
  this.addAnimal('dragon', 'purple');
};


/**
 * Adds a new animal.
 * @param {string} type The animal type.
 * @param {string} color The animal color.
 * @export
 */
boilerplateNg.MyService.prototype.addAnimal = function(type, color) {
  this.animals.push(new boilerplateNg.MyService.Animal(type, color));
};



/**
 * Model for the animal object.
 * @param {string} type The animal type.
 * @param {string} color The animal color.
 * @constructor
 * @export
 */
boilerplateNg.MyService.Animal = function(type, color) {
  /**
   * Animal type.
   * @export
   */
  this.type = type;

  /**
   * Animal color.
   * @export
   */
  this.color = color;
};
