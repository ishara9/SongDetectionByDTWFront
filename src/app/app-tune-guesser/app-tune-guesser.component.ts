import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';

@Component({
  selector: 'app-tune-guesser-body',
  templateUrl: './app-tune-guesser.component.html',
  styleUrls: ['./app-tune-guesser.component.css']
})
export class TuneGuesserBodyComponent implements OnInit {


  resultList = ["abc", "efg"];

  constructor(private dataService: SongService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data => {
      console.log(data);
    })
  }

  setValue(event: []) {
    this.resultList = event;
  }

}
