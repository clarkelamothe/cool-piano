import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Piano App';
  playSound(note: string): void {
    const audio = new Audio();
    audio.src = '../assets/notes/' + note + '.wav';
    audio.load();
    audio.play();
    console.log(audio.src);
  }
}
