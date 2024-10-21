import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listOfProjects: any = [];
  searchForm!:FormGroup

  constructor(private service: AdminService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ){
    this.getProjects();
    this.searchForm = this.fb.group({
      title: [null]
    })

  }

  getProjects(){
    this.service.getAllProjects().subscribe((res) => {
      this.listOfProjects = res;
    })
  }

  deleteProject(id:number){
    this.service.deleteProject(id).subscribe((res)=>{
       this.snackbar.open("Project deleted successfully","Close",{duration:5000});
       this.getProjects();
    })

  }

  searchProject(){
    this.listOfProjects = [];
    const title = this.searchForm.get('title')!.value;
    console.log(title);
    this.service.searchProject(title).subscribe((res)=>{
      console.log(res);
      this.listOfProjects = res;
    })
  }

}
