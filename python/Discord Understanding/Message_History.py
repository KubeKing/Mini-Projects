#By Trey W.
#Messages
import os
import csv
import sys
import pandas as pd
import re, locale
non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)

directory = 'package\messages'
fileDirectory = []
seperate = []
master = {}
wordList = []
countList = []

def load_words():
    with open('english.txt') as word_file:
        valid_words = set(word_file.read().split())

    return valid_words

def load_files():
    rawText = ''
    for file in os.listdir(directory):
        fileDirectory.append(file)

    for x in range(len(fileDirectory)):
        with open((directory+'\\'+(str(fileDirectory[x]))+'\\'+'messages.csv'), encoding="utf8") as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if line_count == 0:
                    line_count += 1
                else:
                    foo = (f'{row[2]}')
                    rawText = (foo.translate(non_bmp_map)+(rawText))
                    line_count += 1
    return rawText

def word_count(str):
    counts = dict()
    words = str.split()

    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts

def processData():
    rawText = rawText.replace('\n', ' ')
    rawText = rawText.replace('\t', ' ')
    rawText = rawText.replace('-', '')
    rawText = rawText.replace('�', '')
    rawText = rawText.replace('�', '')
    rawText = rawText.replace(',', '')
    rawText = rawText.replace('.', '')
    rawText = rawText.replace('?', '')
    rawText = rawText.replace('!', '')
    rawText = rawText.replace(':', '')
    rawText = rawText.replace('\'', '')
    rawText = rawText.replace('\"', '')
    rawText = rawText.replace(';', '')


def makeSheet():
    for key,val in master.items():
        wordList.append(key)
        countList.append(val)

    #------------------------------------------------------------------------

    df = pd.DataFrame({'Word': wordList,
                      'Count': countList})

    writer = pd.ExcelWriter('wordCount.xlsx', engine='xlsxwriter')

    df.to_excel(writer, sheet_name='words')

    writer.save()

if __name__ == '__main__':
    english_words = load_words()
    rawText = load_files()
    master = word_count(rawText)
    makeSheet()
