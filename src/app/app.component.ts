import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlpComponent } from './app.alcomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTestApp';
}