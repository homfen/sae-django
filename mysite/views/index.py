from django.http import HttpResponse
from mysite.func import comm
import datetime

def index(request):
	now = datetime.datetime.now()
	data = {"temp":now}
	html = comm.jrender("index",data)
	return HttpResponse(html)
