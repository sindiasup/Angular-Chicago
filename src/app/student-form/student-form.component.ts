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

  constructor() { }

  ngOnInit(): void {
  }

  onSave(studentForm: NgForm) {
    console.log(studentForm);
  }
}
