import pyautogui
import keyboard
from time import sleep

#https://www.quizlet.com

def autoWriteMode(tts):
    sleep(tts)
    pyautogui.click(635, 415)
    while True:
        if keyboard.is_pressed('h'):
            break
        pyautogui.press('c')
        pyautogui.press('enter')
        pyautogui.click(1465, 500)
        if keyboard.is_pressed('h'):
            break

def autoLearnMode(tts):
    sleep(tts)
    pyautogui.click(1700, 450)
    while True:
        pyautogui.press('space')
        pyautogui.press('1')
        if keyboard.is_pressed('h'):
            break

if __name__ == "__main__":
    autoLearnMode(2)