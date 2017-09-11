import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, AlertController } from 'ionic-angular';
import { AudioRecorder, AudioRecorderState } from "../../utils/audioRecorder";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  AudioRecorderState = AudioRecorderState;
  
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public audioRecorder: AudioRecorder,
              public http: Http) {
  }

  startRecording() {
    try {
      this.audioRecorder.startRecording();
    }
    catch (e) {
      this.showAlert('Could not start recording.');
    }
  }

  stopRecording() {
    try {
      this.audioRecorder.stopRecording();
    }
    catch (e) {
      this.showAlert('Could not stop recording.');
    }
  }

  startPlayback() {
    try {
      this.audioRecorder.startPlayback();
    }
    catch (e) {
      this.showAlert('Could not play recording.');
    }
  }

  stopPlayback() {
    try {
      this.audioRecorder.stopPlayback();
    }
    catch (e) {
      this.showAlert('Could not stop playing recording.');
    }
  } 

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  sendAudioToCloud() {
    let filePath = this.audioRecorder.getFilePath();
    console.log('trying to upload', filePath);

    this.http.post('http://localhost:3000/tune', {
      'tune': filePath
    });
  }
}