#INPUT
import pyperclip
import time
import xlsxwriter
import pandas as pd
from pynput.keyboard import Key, Controller

keyboard = Controller()
replace = []
wit = []
DELAY = 0.1

def tab():
    keyboard.press(Key.tab)
    keyboard.release(Key.tab)

def copy():
    keyboard.press(Key.ctrl)
    keyboard.press('c')
    keyboard.release(Key.ctrl)
    keyboard.release('c')


def countdown(x):
    i = 0
    for i in range(x):
        print(str(x-i))
        time.sleep(1)
        i -= 1
    print()

pyperclip.copy('')   
countdown(5)

while True:
    tab()
    copy()
    time.sleep(DELAY)
    if pyperclip.paste() in replace:
        print('Doube!')
        break
    replace.append(pyperclip.paste())
    tab()
    copy()
    time.sleep(DELAY)
    wit.append(pyperclip.paste())
    tab()
    tab()

df = pd.DataFrame({'Replace': replace,
                      'With': wit})

writer = pd.ExcelWriter('Replaces.xlsx', engine='xlsxwriter')
df.to_excel(writer, sheet_name='words')
writer.save()
    
