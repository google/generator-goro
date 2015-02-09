/**
 * @fileoverview Main app module for this project.
<% if (isVendor) { %> * @author <%= agencyName %> (<%= agencyPOC %>)<% } %>
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
