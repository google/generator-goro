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

