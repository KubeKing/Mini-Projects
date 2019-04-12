import requests
import json
from lxml import html
import pandas


def connectTo(page, path):
    page = requests.get(page)
    tree = html.fromstring(page.content)
    return(tree.xpath(path))

header = {1: 'Date', 2: 'Type', 3: 'registration', 4: 'operator', 5: 'fat', 6: 'location', 7: 'pic', 8: 'cat'}

rawList = []
mainDict = {}
i = 1
colPos = 0
while True:
    holder = rawList.append(connectTo('http://aviation-safety.net/database/events/dblist.php?Event=SEH&lang=&page='+str(i), '//tr/td//text()'))
    if holder == [] or holder == None:
        if rawList[len(rawList)-1] == [] or rawList[len(rawList)-1] == None:
            break
    else:
        rawList.append(holder)
    i += 1
       

for page in rawList:
    for cell in page:
        try:
            num = int(cell[len(cell)-4:])
            if num >= 1931 and num <= 2019: 
                print(str(num), end="\r")
                try:
                    mainDict[cell[len(cell)-4:]] += 1
                except:
                    mainDict[cell[len(cell)-4:]] = 1
                
        except:
            pass

print(mainDict)
