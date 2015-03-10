/* Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
