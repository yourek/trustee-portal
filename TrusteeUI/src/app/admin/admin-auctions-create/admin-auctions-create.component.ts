import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewArticle } from 'src/app/api/models';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';
import { UploadService } from 'src/app/api/services/upload.service';
import { of, switchMap } from 'rxjs';
import { NewAuction } from 'src/app/api/models/new-auction';

@Component({
  selector: 'app-admin-auctions-create',
  templateUrl: './admin-auctions-create.component.html',
  styleUrls: ['./admin-auctions-create.component.scss']
})
export class AdminAuctionsCreateComponent implements OnInit {
  public userForm!: FormGroup;

  filename = '';
  fileOutputPath = '';

  constructor(
    private uploadService: UploadService,
    private router: Router,
    private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        title: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
        body: new FormControl('',[Validators.required])
      }
    )
  }

  setFilename(files: any) {
    if (files[0]) {
      this.filename = files[0].name;
    }
  }

  save(files: HTMLInputElement) {
    var blob: Blob;
    
    if(files.files){
      blob = files.files[0] as Blob

      this.uploadService.apiUploadPost$Json({ body: { file: blob } })
        .subscribe(result=> {
          if(result.Path) {
            this.fileOutputPath = result.Path;
          }
        })
    }
  }

  onConfirm(files: HTMLInputElement): void {
    var newAuction = {
      Title: this.userForm.controls['title'].value,
      Date: this.userForm.controls['date'].value,
      Body: this.userForm.controls['body'].value,
      Price: this.userForm.controls['price'].value,
      Attachement: null
    } as NewAuction
    
    var blob: Blob;

    if(files.files && files.files.length > 0){
      blob = files.files[0] as Blob
      this.uploadService.apiUploadPost$Json({ body: { file: blob } })
        .pipe(
          switchMap(d => {
            if(d.Path){
              newAuction.Attachement = d.Path;
            }
            return this.contentOrchestrationService.createAuction(newAuction);
          })
        ).subscribe(() => this.router.navigate(['admin']));
    } else {
      this.contentOrchestrationService.createAuction(newAuction)
      .subscribe(() => {
        this.router.navigate(['admin'])
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['admin']);
  }

}
