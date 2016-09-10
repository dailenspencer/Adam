import urlparse
from bs4 import BeautifulSoup
import cookielib, urllib2
cj = cookielib.CookieJar()
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
from BeautifulSoup import BeautifulSoup, SoupStrainer
import json, ast
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
	anger = tone_categories[0]["tones"][0]["score"]
	disgust = tone_categories[0]["tones"][1]["score"]
	fear = tone_categories[0]["tones"][2]["score"]
	joy = tone_categories[0]["tones"][3]["score"]
	sadness = tone_categories[0]["tones"][4]["score"]

	analytical = tone_categories[1]["tones"][0]["score"]
	confident = tone_categories[1]["tones"][1]["score"]
	tentative = tone_categories[1]["tones"][2]["score"]

	openness = tone_categories[2]["tones"][0]["score"]
	mindful = tone_categories[2]["tones"][1]["score"]
	extrovertive = tone_categories[2]["tones"][2]["score"]
	agreeable = tone_categories[2]["tones"][3]["score"]
	emotionalRange = tone_categories[2]["tones"][4]["score"]
	
	toneScores = [anger,disgust,fear,joy,sadness, analytical,confident,tentative,openness,mindful,extrovertive,agreeable,emotionalRange]
	return toneScores




analysis("http://www.nytimes.com/");
watsonText = fullText
resultStr = json.dumps(tone_analyzer.tone(text="hello there my name is Dailen!!!"), indent=2);
resultObj = json.loads(resultStr);
print extractTones(resultObj);





