import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'td-form-5-job';

   @ViewChild('jobform') jobapplication!:NgForm

experienceArr = [
  "Fresher", "0-1 Months","1-3 Months","3-6 Months","6-9 Months","9-12 Months",
  "0-1 Year",];

skillsArr = ["HTML","CSS","JavaScript","TypeScript","Angular"];

onSubmit(){
if(this.jobapplication.invalid){
  this.jobapplication.control.markAllAsTouched()
}else{
  this.jobapplication.reset()
}
  }
}
