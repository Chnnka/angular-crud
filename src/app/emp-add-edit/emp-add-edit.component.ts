import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
  education: string[] = [
    'O/L',
    'A/L',
    'Diploma',
    'Higher National Diploma',
    'Bachelor (3 years)',
    'Bachelor (4 years)',
    'Post Graduate',
    'Masters',
    'PhD',
  ];
}
