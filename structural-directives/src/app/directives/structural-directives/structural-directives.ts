import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css',
})
export class StructuralDirectives {
  showText: boolean = true;
  name: string[] = [
    'Anil',
    'Anand',
    'raj',
    'Anand',
    'Anil',
    'Anand',
    'Anil',
    'Anand',
    'Anil',
    'Anand',
  ];
  selectedColor: string = 'red';
}
