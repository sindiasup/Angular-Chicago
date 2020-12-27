import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  std: Student;
  panelOpenState = false;

  students = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSave(studentForm: NgForm) {
    if(studentForm.invalid) {
      window.alert("Please check the error before submit")
      return
    }
    this.students.push(studentForm.value);

    console.log(studentForm);
    console.log(this.students);
    studentForm.resetForm();
  }

  onReset(studentForm: NgForm) {
   studentForm.resetForm();
  }
}
