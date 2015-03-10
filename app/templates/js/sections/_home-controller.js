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

<% if (isVendor) { %> 
/**
 * @author <%= agencyName %> (<%= agencyPOC %>)
 */
<% } %>
goog.provide('boilerplateNg.HomeCtrl');

goog.require('glue.ng.pagination.Model');



/**
 * Provide a description for this class here.
 *
 * @constructor
 * @ngInject
 * @export
 */
boilerplateNg.HomeCtrl = function() {

  /**
   * The user's favorite color.
   * @type {string}
   * @export
   */
  this.favoriteColor = 'grey';

  /**
   * Configuration for carousel.
   * @type {!glue.ng.pagination.Model}
   * @export
   */
  this.carouselModel = new glue.ng.pagination.Model({
    /** @export */
    currentPage: 1,
    /** @export */
    totalItems: 0,
    /** @export */
    itemsPerPage: 1,
    /** @export */
    totalPages: 0,
    /** @export */
    maxLength: 5,
    /** @export */
    timer: 3000,
    /** @export */
    cyclical: true
  });

  this.init_();
};


/**
 * Initializes A, B, and C on the page. Note that methods that don't need to be
 * public, should be made private.
 * @private
 */
boilerplateNg.HomeCtrl.prototype.init_ = function() {
  //...
};


/**
 * Does something magical.
 * @param {string} paramA Description of parameter.
 * @param {number=} opt_paramB Description of optional parameter.
 * @export
 */
boilerplateNg.HomeCtrl.prototype.somePublicMethod =
    function(paramA, opt_paramB) {
  //...
};
