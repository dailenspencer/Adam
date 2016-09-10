import urlparse
from bs4 import BeautifulSoup
import cookielib, urllib2
cj = cookielib.CookieJar()
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
from BeautifulSoup import BeautifulSoup, SoupStrainer
import json
from watson_developer_cloud import ToneAnalyzerV3


tone_analyzer = ToneAnalyzerV3(
    username="985e1bcb-c10e-4f96-bf12-6ce16b5088be",
    password="FqXN2ffZTknH",
    version='2016-02-11')


global fullText
fullText = ""

def analysis(link):
	request = urllib2.Request(link)
	response = opener.open(request)
	for link in BeautifulSoup(response, parseOnlyThese=SoupStrainer('a')):
		if 'Apple' in link.text:
			grabTextFromLink(link['href']);
	
def grabTextFromLink(link):
	if is_absolute(link):
		request = urllib2.Request(link)
		response = opener.open(request)
		for paragraph in BeautifulSoup(response, parseOnlyThese=SoupStrainer('p')):
			global fullText;
			fullText += paragraph.text;

	
	
def is_absolute(link):
	return bool(urlparse.urlparse(link).netloc)
	


def extractTones(resultObj):
	document_tone = resultObj["document_tone"];
	tone_categories = document_tone["tone_categories"];
	toneList = [tone_categories[0],tone_categories[1],tone_categories[2]]
	return toneList




analysis("http://www.nytimes.com/");
watsonText = fullText
resultStr = json.dumps(tone_analyzer.tone(text="hello there my name is Dailen!!!"), indent=2);
resultObj = json.loads(resultStr);
print extractTones(resultObj);





