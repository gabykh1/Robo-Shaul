import tkinter as tk
from tkinter import messagebox
from PIL import ImageTk, Image
import requests
import subprocess

# api of website that add nikud to text
NAKAD_API_URL = "https://nakdan-5-2.loadbalancer.dicta.org.il/api"
# location of JavaScript package for transliterating Hebrew
JS_CODE_PATH = 'main.js'


### generate hebrew to english ###
# the payload for the website
def get_nikod_request(text_to_nikod):
    return {
        "task": "nakdan",
        "data": text_to_nikod,
        "addmorph": True,
        "keepqq": False,
        "matchpartial": True,
        "nodageshdefmem": False,
        "patachma": False,
        "keepmetagim": True,
        "genre": "modern",
        "useTokenization": True
    }

# adding nikud to the sentence
def adding_nikud(text):
    """
    this code will get information from the website "nakdan" and will return a sentence with nikud
    :param text: string: hebrew sentence that will be input in the root
    :return: the sentence with nikud
    """
    sentence = text
    json_data = get_nikod_request(sentence)
    list_of_words = []
    response = requests.post(NAKAD_API_URL, json=json_data)
    for data in response.json().values():
        for row in data:
            word = row['nakdan']
            if len(word['options']) == 0:
                list_of_words.append(word['word'])
                continue
            option = word['options'][0]['w'].replace('|', '')
            list_of_words.append(option)
    return ("".join(list_of_words))

# transliterating proces with js file
def transliterator(text):
    nikud_sentence = adding_nikud(text)
    return (subprocess.check_output(['node', JS_CODE_PATH, nikud_sentence])).decode('utf-8').strip()


### Create the root window for robo shaul ###
root = tk.Tk()
root.title("Robo-Shaul")

# Load the intro face image and resize it
image = Image.open("robo_intro.png")
image = image.resize((600, 350)) # Change the size here
photo = ImageTk.PhotoImage(image)
label = tk.Label(root, image=photo)
label.pack()


# Create a text box with a placeholder
def on_entry_click(event):
    if text_box.get() == 'תכתובו כאן משהו כמו: יש לי אובססיה עם פנסיה':
        text_box.delete(0, tk.END)
        text_box.insert(0, '')
text_box = tk.Entry(root, width=50)
text_box.insert(0, 'תכתובו כאן משהו כמו: יש לי אובססיה עם פנסיה')
text_box.bind('<FocusIn>', on_entry_click)
text_box.pack()
text_box.config(justify="right")

def transliterator_command():
    # Get the text from the text box
    text = text_box.get()

    # Call your transliterator function here
    transliterated = transliterator(text)

    # Update the label with the translated text
    translated_label.config(text=transliterated)

# Create a translate button
translate_button = tk.Button(root, text="Transliterate", command=transliterator_command)
translate_button.pack()

# Create a label to display the translated text
translated_label = tk.Label(root, text="")
translated_label.pack()

def copy_text():
    # Get the text from the translated label
    translated_text = translated_label.cget('text')

    # Copy the text to the clipboard
    root.clipboard_clear()
    root.clipboard_append(translated_text)
    root.update()

    # Show a message box to confirm the text has been copied
    messagebox.showinfo("הועתק בהצלחה", 'עכשיו תדביקו אותי במודל ליצירת הקול')

# Create a copy button to copy the text to the stt model
copy_button = tk.Button(root, text="Copy", command=copy_text)
copy_button.pack()

# Start the event loop
root.mainloop()
