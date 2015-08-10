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
 * @fileoverview Define angularjs directives.
<% if (isVendor) { %> * @author <%= agencyPOC %> (<%= agencyName %>)<% } %>
 */
goog.provide('boilerplateNg.myComponent');

goog.require('boilerplateNg.myComponent.MyDirectiveCtrl');


/**
 * Name that the directive will be registered with.
 * @const {string}
 */
boilerplateNg.myComponent.CHILD_DIRECTIVE_NAME = 'childDirective';


/**
 * Name that the directive will be registered with.
 * @const {string}
 */
boilerplateNg.myComponent.DIRECTIVE_NAME = 'myDirective';


/**
 * Detailed description of this directive.
 *
 * Attributes:
 *   data-favorite-color {string}: The color you want set as your favorite.
 *
 * Example markup:
 *   <div class="my-directive" data-my-directive
 *       data-favorite-color="myCtrl.myColor">
 *   </div>
 *
 * @return {!angular.Directive} MyComponent directive definition object.
 */
boilerplateNg.myComponent.directive = function() {
  return {
    restrict: 'A',
    scope: {
      /** @export */
      favoriteColor: '='
    },
    controller: boilerplateNg.myComponent.MyDirectiveCtrl,
    controllerAs: 'directiveCtrl',
    // This template is included in the page inline to avoid extra http
    // requests. See base.tpl
    templateUrl: '<%= projectPath %>js/components/my-component/my-directive-template.html',
    link: function(scope, element, attrs, ctrl) {
      // ...
    }
  };
};


/**
 * If you need to have a child directive interact with a parent directive,
 * you can do so like this:
 *
 * @return {!angular.Directive} Directive definition object.
 */
boilerplateNg.myComponent.childDirective = function() {
  return {
    // Here, define the parent as required.
    // Yes, you also have to include itself.
    require: [
      '^' + boilerplateNg.myComponent.DIRECTIVE_NAME,
      '^' + boilerplateNg.myComponent.CHILD_DIRECTIVE_NAME
    ],
    link: function(scope, element, attrs, ctrls) {
      // Now ctrls is an array of all the directive controllers in the
      // require statement. It's recommended that you have some setter on
      // your directive controller so this controller can interact
      // with the parent easily.
      var parentCtrl = ctrls.shift();
      var childCtrl = ctrls.shift();

      childCtrl.setParentCtrl(parentCtrl);
    }
  };
};
