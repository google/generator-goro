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
 * @fileoverview Main app module for this project.
<% if (isVendor) { %> * @author <%= agencyPOC %> (<%= agencyName %>)<% } %>
 *
 * Note: For simpler projects, it's ok to create just one AngularJS module
 * with all of your directives, controllers, etc. However, for more complex
 * projects we recommend having each component in it's own module and then
 * injecting those modules into your main app.
 */
goog.provide('boilerplateNg.app');

goog.require('boilerplateNg.HomeCtrl');
goog.require('boilerplateNg.MyService');
goog.require('boilerplateNg.myComponent');
goog.require('glue.ng.common');
goog.require('glue.ng.pagination');


/**
 * Creates the main module for the app and declare its dependencies.
 * @type {!angular.Module}
 */
boilerplateNg.app.module = angular.module('boilerplateNg', [
  // This configures Angular to use {[]} instead of double curly brackets
  // which is safe to use with goro's django template language.
  glue.ng.common.module.name,
  glue.ng.pagination.module.name
]);

boilerplateNg.app.module.controller('HomeCtrl', boilerplateNg.HomeCtrl);

boilerplateNg.app.module.directive(boilerplateNg.myComponent.DIRECTIVE_NAME,
    boilerplateNg.myComponent.directive);

boilerplateNg.app.module.directive(
    boilerplateNg.myComponent.CHILD_DIRECTIVE_NAME,
    boilerplateNg.myComponent.childDirective);

// module.service will create your service as a singleton without having
// to write a factory.
boilerplateNg.app.module.service('myService',
    boilerplateNg.MyService);
