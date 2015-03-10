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
 * @fileoverview Define angularjs controller.
<% if (isVendor) { %> * @author <%= agencyName %> (<%= agencyPOC %>)<% } %>
 */
goog.provide('boilerplateNg.myComponent.MyDirectiveCtrl');

goog.require('boilerplateNg.MyService');



/**
 * Provide a description for this class here.
 *
 * If you are creating a more complex component needing directive-to-directive
 * communication, you may want to inherit from the glue abstract directive
 * controller.
 *
 * @param {!angular.Scope} $scope The directive scope.
 * @param {!boilerplateNg.MyService} myService The service.
 * @constructor
 * @ngInject
 * @export
 */
boilerplateNg.myComponent.MyDirectiveCtrl = function($scope, myService) {
  /** @private {!angular.Scope} */
  this.scope_ = $scope;

  /**
   * Whether the element is actively selected or not.
   * @type {boolean}
   * @export
   */
  this.selected = false;

  /**
   * Service managing animal data.
   * @private
   */
  this.myService_ = myService;

};


/**
 * The CSS Class names for this directive.
 * @enum {string}
 */
boilerplateNg.myComponent.MyDirectiveCtrl.CssClass = {
  ACTIVE: 'boilerplate-active',
  NEXT: 'boilerplate-next'
};


/**
 * Does something magical.
 * @export
 */
boilerplateNg.myComponent.MyDirectiveCtrl.prototype.toggleActive =
    function() {
  this.selected = !this.selected;
};


/**
 * Gets the animals.
 * @return {Array.<boilerplateNg.MyService.Animal>}
 * @export
 */
boilerplateNg.myComponent.MyDirectiveCtrl.prototype.getAnimals = function() {
  return this.myService_.animals;
};

