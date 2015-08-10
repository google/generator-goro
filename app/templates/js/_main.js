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
 * @fileoverview All js files needed for site included here.
<% if (isVendor) { %> * @author <%= agencyPOC %> (<%= agencyName %>)<% } %>
 */

// Services.
{% include "<%= projectDomain %><%= projectPath %>js/my-service.js" %}

// Components.
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-component-controller.js" %}
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-component-directive.js" %}
{% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-component.js" %}

// Controllers.
{% include "<%= projectDomain %><%= projectPath %>js/sections/home-controller.js" %}

// Application module.
{% include "<%= projectDomain %><%= projectPath %>js/app.js" %}

goog.require('boilerplateNg.app');