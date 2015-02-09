{# ------- Global Variables --------- #}
{% var as app_domain %}"{{goro.page.site.domain}}"{% endvar %}
{% var as app_path %}"{{goro.page.path_relative}}"{% endvar %}

{# ------- Datasources -------------- #}
{% var as boilerplate_db %}
  {
    "carousel": "glue/boilerplate/Carousel"
  }
{% endvar %}
