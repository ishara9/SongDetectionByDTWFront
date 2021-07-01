import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../song-service.service';

@Component({
  selector: 'app-call-to-service',
  templateUrl: './call-to-service.component.html',
  styleUrls: ['./call-to-service.component.css']
})
export class CallToServiceComponent implements OnInit {

  constructor(private dataService: SongServiceService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data => {
      console.log(data);
    })
  }

}
