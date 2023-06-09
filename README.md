![robo_intro](https://user-images.githubusercontent.com/108233349/234963970-5be87d9f-705c-45cd-aa28-e6fbf795f427.png)

# Introduction
Welcome to the Hebrew Clone Voice project, featuring "Robo-shaul"!
This project uses advanced speech synthesis technology to create a lifelike Hebrew voice that closely mimics the unique vocal qualities of Shaul Amsterdamski.
Using a combination of Tacotron2 and HifiGAN, I've created a state-of-the-art voice synthesis system that delivers unparalleled realism and clarity.

I would like to express my deepest gratitude to the talented individuals who contributed to the development of this project.
Special thanks go to Nir Geller @Nir Geller, who provided invaluable expertise in coding and implementing the automation with the transliteration.
I also extend my thanks to Moshe Moyal @1moshe135, who generously provided his skills in creating the 3D model of the Shaul Amsterdamski,
and to Daniel Ophir, who contributed his expertise in animation. Without their hard work and dedication, this project would not have been possible.
I am truly grateful for their contributions and proud to have worked with such talented individuals.

# Basic Overview
![ROBOSHAUL](https://user-images.githubusercontent.com/108233349/235231187-003228b8-7bb1-4afd-9436-5928faba26ed.gif)

Want to know how to do the magic? Skip to the "How To Do" part.
# Visualize Robo-Shaul Speaks
https://user-images.githubusercontent.com/108233349/235146533-137586cf-38cd-4a0c-a41c-ae3df0a4948d.mov

"גבי אל תכניס לי מילים לפה"
# Examples

|קלט   | פלט|
|-----------|----------|
|אני חושב מה להגיד|https://user-images.githubusercontent.com/108233349/235322827-a1e217af-112f-4ef9-9866-78be57c20ebe.mp4|
|גבי אל תכניס לי מילים לפה|https://user-images.githubusercontent.com/108233349/235323176-ebf7239a-bc4d-484d-ba94-c5f7decd380c.mp4|
|התחביב שלך מפגר|https://user-images.githubusercontent.com/108233349/235323265-63f3ba2d-282c-4ec8-8451-cfc867bbf847.mp4|
|אני רוצה פודקאסט משלי|https://user-images.githubusercontent.com/108233349/235323381-e2aa0c31-297d-44ab-af23-ee20b517499c.mp4|
|אני רוצה גם|https://user-images.githubusercontent.com/108233349/235323393-9707fba6-ef36-4f87-b484-9a5aa4836b1d.mp4|
|מיליון דולר והודעה מראש הממשלה שאני הפרשן הכי טוב|https://user-images.githubusercontent.com/108233349/235323418-79da97d1-2dfd-452c-b1a6-bd8999046afd.mp4|
|אם זה נשמע כמו שאול מדבר כמו שאול ועם משפטים כמו של שאול זה כנראה קוד של גבי|https://user-images.githubusercontent.com/108233349/235323439-a7f650d0-5a85-4598-9c9e-71486258e87b.mp4|
|תודה רבה לניר גלי|https://user-images.githubusercontent.com/108233349/235323317-08d78915-fd1c-45e8-86ba-0444c02d4ef9.mp4|
|תודה רבה למשה מויאל|https://user-images.githubusercontent.com/108233349/235323331-3636e4e6-a447-468d-8a9a-fb84d59ba21b.mp4|
|תודה רבה לדניאל אופיר|https://user-images.githubusercontent.com/108233349/235323358-e2f8b2bd-dd2b-46b4-b106-d096ded225b8.mp4|
|אני מחפש את הרובוטית להקים איתה משפחה|https://user-images.githubusercontent.com/108233349/235323453-d7dc5265-7655-4df6-8ce8-7544aa70e3c1.mp4|
|אני רוצה ליצור שוק ריכוזי שלי, מתכנתים יכתבו לי קוד ואני אפתח את החברה פנסיה בלי מע"מ|https://user-images.githubusercontent.com/108233349/235323512-b0f3eef9-e037-4670-b881-2a8f60518ff4.mp4|
|זה בסדר אם אתה לא אוהב אותי לא לכולם יש טעם טוב|https://user-images.githubusercontent.com/108233349/235323567-3603c53a-efa1-4fc9-abad-03fb22080e5d.mp4|
|רובוטים זה הדיבור היום|https://user-images.githubusercontent.com/108233349/235323586-454a6756-c308-45ee-beb5-c77cab82bc53.mp4|

# Explanation Of The TTS Mmodel
I used Tacotron2 and HifiGAN for the TTS model.

Tacotron2 is a neural network-based text-to-speech system that generates speech from written text. The system is based on a sequence-to-sequence architecture, which takes as input a sequence of text characters and outputs a sequence of audio samples that correspond to the text. Tacotron2 is trained using a large corpus of audio recordings and their corresponding transcripts, which allows the system to learn the mapping between text and speech.

HifiGAN is a generative adversarial network (GAN) that is used to enhance the quality of audio generated by Tacotron2. The output of Tacotron2 can sometimes sound robotic or artificial, but HifiGAN can be used to add natural-sounding audio details such as background noise, reverb, and pitch variations. HifiGAN is trained on a large dataset of high-quality audio recordings, which allows it to learn how to generate realistic audio samples that closely match the input from Tacotron2.

In the Hebrew Clone Voice project, I've combined Tacotron2 and HifiGAN to create a system that generates high-quality, lifelike Hebrew speech that sounds just like the Shaul character. my system is trained on a large corpus of Hebrew audio recordings, which allows it to accurately capture the unique phonetic features of the Hebrew language. With my system, you can now create your own Hebrew Clone Voice for any text you input.

# How To Train Your Own Robo-Shaul TTS - **optional**
If you want to use my training model skip this part.

1. [Download the dataset](https://story.kan.org.il/robo_shaul)
2. Download the jupyter notebook and put in one folder the notebook and "metadata.xlsx"
3. run the "Training Notebook" while the zip wavs in your drive, and paste the list.txt in the notebook
# How To Creating Voice
1. Download all the "interface" folder on your pc and run "interface.py".
![interface](https://user-images.githubusercontent.com/108233349/235344432-d626d9eb-e66a-4bf3-ac16-54c24f6cc7fb.PNG)

2. Run the "Synthesis Notbook" and put your trained model id (The default is the trained model I made)
# 3D model

![3Dfirst](https://user-images.githubusercontent.com/108233349/235444861-a68a6704-284f-4d4a-91f2-437900f42156.png)
![3Dsecond](https://user-images.githubusercontent.com/108233349/235444869-d0e13a5e-7f34-47de-a2e1-1eb5cd3d5379.png)

The full 3D model will be in the day of the compotition

