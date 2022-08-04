import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';

@Component({
  selector: 'app-admin-articles-edit',
  templateUrl: './admin-articles-edit.component.html',
  styleUrls: ['./admin-articles-edit.component.scss']
})
export class AdminArticlesEditComponent implements OnInit {
  public userForm!: FormGroup;
  public id = '';
  private resposeData!: Article;

  constructor(  
    private router: Router,
    private route: ActivatedRoute,
    private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] || '';

    this.userForm = new FormGroup(
      {
        id: new FormControl({value: this.id, disabled: true},[Validators.required]),
        title: new FormControl({value: ''},[Validators.required]),
        date: new FormControl({value: ''},[Validators.required]),
        body: new FormControl({value: ''},[Validators.required])
      }
    )

    this.fetchData();
  }

  fetchData(): void {
    this.contentOrchestrationService.getArticle(this.id)
      .subscribe(result => {
        if(result){
          this.resposeData = result;
          this.fulfillForm();
        }
      })
  }

  fulfillForm(): void {
    this.userForm.patchValue({
      id: this.resposeData.Id,
      title: this.resposeData.Title,
      date: this.resposeData.Date,
      body: this.resposeData.Body
    });
  }

  onConfirm(): void {
    var article = {
      Id: this.userForm.controls['id'].value,
      Title: this.userForm.controls['title'].value,
      Date: this.userForm.controls['date'].value,
      Body: this.userForm.controls['body'].value
    } as Article
    
    this.contentOrchestrationService.updateArticle(this.id, article)
      .subscribe(() => {
        this.router.navigate(['admin']);
      })
  }

  onCancel(): void {
    this.router.navigate(['admin']);
  }
}
