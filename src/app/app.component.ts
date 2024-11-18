import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  counter: number = 0;

  ctrReset(): void {
    this.counter = 0;
  }

  ctrInc(): void {
    this.counter +=1;
  }

  ctrDec(): void {
    this.counter -=1;
  }
}
