import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-project-details',
  templateUrl: './view-project-details.component.html',
  styleUrl: './view-project-details.component.scss'
})
export class ViewProjectDetailsComponent {

  projectId: number=this.ActivatedRoute.snapshot.params["id"];
  projectData:any;
  comments:any;
  commentForm!: FormGroup;


  constructor(private service : AdminService,
    private ActivatedRoute: ActivatedRoute,
    private fb : FormBuilder,
    private snackbar : MatSnackBar
  ) {

  }

  ngOnInit(){
    this.getProjectById();
    this.getComments();
    this.commentForm = this.fb.group({
      content:[null, Validators.required]
    })
  }

  getProjectById(){
    this.service.getProjectById(this.projectId).subscribe((res)=>{
         this.projectData = res ;
    })
  }

  getComments(){
    this.service.getCommentsByProject(this.projectId).subscribe((res)=>{
         this.comments = res ;
    })
  }

  publishComment(){
    this.service.createComment(this.projectId,this.commentForm.get("content")?.value).subscribe((res)=>{
      if(res.id != null){
        this.snackbar.open("Comment posted successfully", "Close", { duration: 5000});
        this.getComments();
      } else{

        this.snackbar.open("Something went wrong", "Close", { duration: 5000});
      }

      
    })
  }

}
