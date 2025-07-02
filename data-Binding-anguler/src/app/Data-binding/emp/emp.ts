import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp',
  imports: [FormsModule],
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp {
  //One way binding
  userName: string = 'Anil';
  imageUrl: string = 'img.png';
  showPassedValue(value: string) {
    alert(value);
  }
  //Two way binding
  userInput: string = '';
  selectedOption: string = '1';
  //Single Event Binding
  count = signal<number>(0); //
  increment() {
    this.count.set(this.count() + 1);
  }
}
