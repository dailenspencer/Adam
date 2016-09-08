import csv
import requests
import urllib2
from BeautifulSoup import BeautifulSoup
import json
from watson_developer_cloud import ToneAnalyzerV3


tone_analyzer = ToneAnalyzerV3(
    username="985e1bcb-c10e-4f96-bf12-6ce16b5088be",
    password="FqXN2ffZTknH",
    version='2016-02-11')


articleCount = 0

def marketWatchAnalysis():
	baseUrl = 'http://www.marketwatch.com'
	newsViewerUrl = baseUrl + '/newsviewer'
	response = requests.get(newsViewerUrl)
	html = response.content
	soup = BeautifulSoup(html)
	table = soup.find('div', attrs={'class': 'foreverblock'})

	analysisResults = []
	fullText = ""
	for listItem in table.findAll('li')[1:]:
		for a in listItem.findAll('a', href=True):
			if stockName in str(a):
					articleCount++;
					fullText += retrieveMarketWatchText(baseUrl + a['href'])

	print json.dumps(tone_analyzer.tone(text=fullText), indent=2)
	# print fullText


def retrieveMarketWatchText(marketWatchArticleLink):
	page = urllib2.urlopen(marketWatchArticleLink).read()
	soup = BeautifulSoup(page)
	articleBody = soup.find('div', attrs={'id':'article-body'})
	fullText = ""
	if articleBody:
		for paragraph in articleBody.findAll('p')[1:]:
			fullText += paragraph.text

	if(fullText):
		return fullText
	else:
		return ""
	


stockName = raw_input("Please enter something: ")
marketWatchAnalysis()




