import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
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
}
