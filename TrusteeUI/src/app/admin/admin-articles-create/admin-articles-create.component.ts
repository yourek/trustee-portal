import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewArticle } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';

@Component({
  selector: 'app-admin-articles-create',
  templateUrl: './admin-articles-create.component.html',
  styleUrls: ['./admin-articles-create.component.scss']
})
export class AdminArticlesCreateComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(  
    private router: Router,
    private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {

    this.userForm = new FormGroup(
      {
        title: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
        body: new FormControl('',[Validators.required])
      }
    )
  }

  onConfirm(): void {
    var newArticle = {
      Title: this.userForm.controls['title'].value,
      Date: this.userForm.controls['date'].value,
      Body: this.userForm.controls['body'].value
    } as NewArticle
    
    this.contentOrchestrationService.createArticle(newArticle)
      .subscribe(() => {
        this.router.navigate(['admin']);
      })
  }

  onCancel(): void {
    this.router.navigate(['admin']);
  }
}
