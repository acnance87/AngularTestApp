import { Component } from '@angular/core';

@Component({
  selector: 'al-ement',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AlpComponent {
[x: string]: any;
  hairColor = "Red";
  eyeColor = "Blue";
  height = "5'10\"";
}
