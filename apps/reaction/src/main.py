import pyautogui
from time import sleep

#https://www.humanbenchmark.com/tests/reactiontime

while True:
    #time.sleep(0.007)
    sleep(0.0083)
    im = pyautogui.screenshot()
    if pyautogui.pixelMatchesColor(1200, 425, (75, 219, 106)):
        pyautogui.click(1200, 425)
        print('GREEN', end="\t\r")
        sleep(1)
    else:
        print('Not Green', end="\t\r")
    #print(im.getpixel((1200, 425)), end="\t\r")


#(75, 219, 106)
#(255, 255, 255)