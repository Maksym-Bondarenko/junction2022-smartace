import moviepy.editor as mp
import speech_recognition as sr
import os
import sys

from easynmt import EasyNMT


def videoToText(video_filename, text_filename, language_code):
    clip = mp.VideoFileClip(video_filename)
    #audio_filename = video_filename.split(".")[0] + ".wav"
    audio_filename = "./converted.wav"
    clip.audio.write_audiofile(audio_filename)

    r = sr.Recognizer()
    audio = sr.AudioFile(audio_filename)
    with audio as source:
        audio_file = r.record(source)
        result = r.recognize_google(audio_file, language=language_code)
    with open('recognized.txt', mode='w') as file:
        file.write("Recognized Speech:")
        file.write("\n")
        file.write(result)
        print("ready!")

    return result


def language_translation(sentences, target_language):
    model = EasyNMT('opus-mt')
    translated_language = model.translate(sentences, target_language)

    return translated_language


def language_code(language):
    lang_dict = {'Chinese': 'zh', 'German': 'de', 'Finnish': 'fi',
                 'French': 'fr', 'Russian': 'ru', 'Spanish': 'es'}
    lang_code = 'en'
    if language in lang_dict.keys():
        lang_code = lang_dict[language]
    else:
        print("Sorry, we couldn't translate audio into your chosen language, it will be translated to English.")

    return lang_code


def videoToTranslatedText(video_filename, video_language, target_language):
    videoText = videoToText(video_filename, "./result.txt",
                            language_code(video_language))
    print("\n")
    print(videoText)
    print("\n")
    translated_sentence = language_translation(
        videoText, language_code(target_language))

    return translated_sentence


final_result = videoToTranslatedText("./french.mp4", "French", "English")
#final_result = videoToTranslatedText(arg1, arg2, arg3)

print('this is python script')
print('\n\n')
print(final_result)