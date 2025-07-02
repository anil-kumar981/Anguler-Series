import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectives } from './directives/structural-directives/structural-directives';

@Component({
  selector: 'app-root',
  imports: [StructuralDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'structural-directives';
}
