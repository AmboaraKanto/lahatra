import { Video } from './../../models/video';
import { VideoService } from './../../services/video.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  video: Video;
  titre:string;
  lien:string;
  artiste:string;
  description:string;
  //constructor() { }

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
