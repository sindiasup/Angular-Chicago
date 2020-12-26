import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  // Define your routes
  {path: 'home', component: HomePageComponent},
  {path: 'new-student', component: StudentFormComponent},
  {path: 'students', component: ListStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
