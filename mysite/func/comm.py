import os, jinja2
from django.conf import settings

def datetimeformat(value, format='%Y-%m-%d %H:%M:%S'):
    return value.strftime(format)
    #%Y-%m-%d %H:%M:%S

jinja_environment = jinja2.Environment(autoescape=True,
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), '../templates')))
jinja_environment.filters['datetimeformat'] = datetimeformat
jinja_environment.globals['STATIC_URL'] = settings.STATIC_URL

Template = jinja2.Template

def jrender(tmpl,data):
	template = jinja_environment.get_template(tmpl+".html")
	return template.render(data)
