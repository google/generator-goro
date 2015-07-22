{% extends "global.layouts/maia.tpl" %}

{% comment %}
Copyright 2015 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}

{# Use this block for defining global variables that apply to the entire page or site. #}
{% block global %}
  {% include "<%= projectDomain %><%= projectPath %>config.inc.tpl" %}
{% endblock %}

{% block style %}
  <link href="<%= projectPath %>css/default.min.css" rel="stylesheet">
{% endblock %}

{% comment %}
  For AngularJS projects, having your app declared on the body tag is the
  standard. However, if your project is not expected to have much AngularJS,
  we recommend placing the app declaration in a more specific area of the dom
  for better performance.
{% endcomment %}
{% block body %}<body data-ng-app="boilerplateNg">{% endblock %}

{% block body-base %}
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.js"></script>

  <script type="text/ng-template" id="/boilerplate/my-component/my-directive-template.html">
    {% include "<%= projectDomain %><%= projectPath %>js/components/my-component/my-directive-template.html" %}
  </script>
  <script src="<%= projectPath %>js/main.min.js{% if request.GET.js_debug|add:"0" %}?js_debug=1{% endif %}"></script>

{% endblock %}
