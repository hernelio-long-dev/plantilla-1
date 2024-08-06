import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css'
})
export class AudioPlayerComponent {

  @ViewChild('audio') audioElement!: ElementRef;
  srcIcon: string = "assets/corazon.png";
  constructor(){

  }

  playPause() {
    if (this.audioElement.nativeElement.paused) {
      this.srcIcon =  "assets/corazon1.png";
      this.audioElement.nativeElement.play();
    } else {
      this.srcIcon =  "assets/corazon.png";
      this.audioElement.nativeElement.pause();
    }
  }

}
