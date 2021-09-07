import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../song-service.service';

@Component({
  selector: 'app-call-to-service',
  templateUrl: './call-to-service.component.html',
  styleUrls: ['./call-to-service.component.scss']
})
export class CallToServiceComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  fileDataUri: string;
  fileErrorMsg = null;
  file: File;
  content: string;
  acceptedMimeTypes = [
    'audio/mpeg',
    'audio/mp3',
    'application/octet-stream'
  ];

  constructor(
    private dataService: SongServiceService
  ) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data => {
      console.log(data);
    })
  }

  previewFile(): void {
    this.fileDataUri = null;
    this.file = this.fileInput.nativeElement.files[0];
    const isFileValid = this.file && this.validateFile(this.file);

    if (isFileValid === true) {
      this.fileErrorMsg = null;
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        // @ts-ignore
        this.fileDataUri = reader.result;
        if (this.fileDataUri.length > 0) {
          this.content = this.fileDataUri.split(',')[1]; // content of the file
          console.log('this.content :', this.content);
        }
      };
    } else if (isFileValid === false) {
      this.file = null;
      this.fileErrorMsg = 'File must be in MP3 format and should not exceed 5MB!';

    } else {
      this.file = null;
      this.fileErrorMsg = null;
    }
  }

  validateFile(file: File): boolean {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 5242880;
  }

  onLogoClick(event: any): void {
    // Fix: HTML input file selection event not firing upon selecting the same file
    const element = event.target as HTMLInputElement;
    element.value = '';
  }

}
