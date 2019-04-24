import pyautogui
import keyboard
from time import sleep

#https://www.quizlet.com

def multKey(key, times):
    for i in range(times):
        pyautogui.press(key)
        sleep(0.005)

def autoWriteMode(tts):
    #Set zoom to 80%
    sleep(tts)
    pyautogui.click(635, 415)
    sleep(0.1)
    while True:
        if keyboard.is_pressed('h'):
            break
        sleep(0.5)
        pyautogui.press('o')
        sleep(0.25)
        pyautogui.press('enter')
        sleep(0.25)
        pyautogui.press('o')
        if keyboard.is_pressed('h'):
            break

def autoLearnMode(tts):
    sleep(tts)
    pyautogui.click(1700, 450)
    while True:
        pyautogui.press('space')
        pyautogui.press('1')
        sleep(0.017)
        if keyboard.is_pressed('h'):
            break

if __name__ == "__main__":
    #autoLearnMode(2)
    autoWriteMode(2)