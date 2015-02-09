{% extends "global.layouts/maia.tpl" %}

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