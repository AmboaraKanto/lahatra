import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  //constructor() { }

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
