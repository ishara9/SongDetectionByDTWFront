import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import { SongService } from '../song.service';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements OnInit {

  title = 'micRecorder';

  record: any;

  isRecording = false;

  url: any;

  error: any;

  blob: any;

  @Output() valueChange = new EventEmitter();

  constructor(private domSanitizer: DomSanitizer, private dataService: SongService) { }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  startRecording() {
    this.url = null;
    this.isRecording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: any) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
      sampleRate: 44100,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  stopRecording() {
    this.isRecording = false;
    this.record.stop(this.processRecording.bind(this));
  }


  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
    this.blob = blob;
    console.log("blob", blob);
    console.log("url", this.url);
  }

  uploadRecording() {
    this.valueChange.emit(["Refreshing..."]);
    this.dataService.uploadRecording(this.blob).subscribe(data => {
      console.log(data.songList)
      this.valueChange.emit(data.songList);
    });
  }

  errorCallback(error: any) {
    console.log(error);
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit() { }
}


