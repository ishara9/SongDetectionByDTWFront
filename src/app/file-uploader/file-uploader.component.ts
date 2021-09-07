import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SongService } from '../song.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  constructor(private dataService: SongService) { }

  ngOnInit(): void {
  }

  onFileUpload(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.valueChange.emit(["Refreshing..."]);
      this.dataService.uploadRecording(file).subscribe(data => {
        console.log(data.songList)
        this.valueChange.emit(data.songList);
      });
    }
  }

}
