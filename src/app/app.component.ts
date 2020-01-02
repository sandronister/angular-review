import { Component } from '@angular/core';

import { Student } from './student/student.model';

@Component({
	selector: 'neo-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'Matrix';
  
  students: Student[] = [
		{ name: 'Mr Anderson', isWaked: true, timeWaked: '1 Year' },
		{ name: 'Morpheus', isWaked: true, timeWaked: '10 Years' },
		{ name: 'Judas', isWaked: false }
	];
}
