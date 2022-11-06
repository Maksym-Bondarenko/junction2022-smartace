import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  languages;
  showRecognizedText = false;
  showTranslatedText = false;
  recognizedText;
  translatedText;
  fromLanguage = 'Chinese';
  toLanguage = 'English';
  pathToVideo;

  ngOnInit() {
    this.languages = [
      { code: 'en', name: 'English' },
      { code: 'de', name: 'German' },
      { code: 'ukr', name: 'Ukrainian' },
      { code: 'chi', name: 'Chinese' }
    ];
  }

  uploadVideo($event): void {
    console.log($event.target.files);

    let fileName = $event.target.files[0].name;
    let path = "C:/Users/bondam/Private/Junction2022/Project/smartace/src/translationModule/" + fileName;
    this.pathToVideo = path;
  }

  selectFromLanguage(language): void {
    this.fromLanguage = language.name;
  }

  selectToLanguage(language): void {
    this.toLanguage = language.name;
  }

  getTranslatedText() {
    console.log("File: " + this.pathToVideo);
    console.log("From: " + this.fromLanguage);
    console.log("To: " + this.toLanguage);
    
    this.showRecognizedText = true;
    this.recognizedText = 'Hallo und herzlich willkommen zu unsere Junction Hackathon 2022!';
    this.showTranslatedText = true;
    this.translatedText = 'Hello and welcome to our Junction Hackathon 2022!';
  }

}
