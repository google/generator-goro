/**
 * @fileoverview All js files needed for site included here.
<% if (isVendor) { %> * @author <%= agencyName %> (<%= agencyPOC %>)<% } %>
 */

// Services.
{% include "<%= projectDomain %><%= projectPath %>js/my-service.js" %}

// Components.
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-directive-controller.js" %}
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-component-directive.js" %}
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-component.js" %}

// Controllers.
{% include "<%= projectDomain %><%= projectPath %>js/sections/home-controller.js" %}

// Application module.
{% include "<%= projectDomain %><%= projectPath %>js/app.js" %}

goog.require('boilerplateNg.app');