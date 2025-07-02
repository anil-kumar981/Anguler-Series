import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emp } from './Data-binding/emp/emp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Emp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'data-Binding-anguler';
}
