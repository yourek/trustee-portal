import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentOrchestrationService } from 'src/app/services/content.orchestration.service';
import { UploadService } from 'src/app/api/services/upload.service';
import { switchMap } from 'rxjs';
import { NewAuction } from 'src/app/api/models/new-auction';
import { AuctionsService } from 'src/app/api/services/auctions.service';
import { Auction } from 'src/app/api/models/auction';


@Component({
  selector: 'app-admin-auctions-edit',
  templateUrl: './admin-auctions-edit.component.html',
  styleUrls: ['./admin-auctions-edit.component.scss']
})
export class AdminAuctionsEditComponent implements OnInit {
  public userForm!: FormGroup;
  public id = '';
  private resposeData!: Auction;

  filename = '';
  fileOutputPath = '';

  constructor(
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute,
    private contentOrchestrationService: ContentOrchestrationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] || '';
    this.userForm = new FormGroup(
      {
        id: new FormControl({value: this.id, disabled: true}, [Validators.required]),
        title: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
        body: new FormControl('',[Validators.required])
      }
    )
    this.fetchData();
  }

  fetchData(): void {
    this.contentOrchestrationService.getAuction(this.id)
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
      body: this.resposeData.Body,
      price: this.resposeData.Price
    });

    if(this.resposeData.Attachement){
      this.filename = this.resposeData.Attachement;
    }
  }

  setFilename(files: any) {
    if (files[0]) {
      this.filename = files[0].name;
    }
  }

  onConfirm(files: HTMLInputElement): void {
    var Auction = {
      Id: this.userForm.controls['id'].value,
      Title: this.userForm.controls['title'].value,
      Date: this.userForm.controls['date'].value,
      Body: this.userForm.controls['body'].value,
      Price: this.userForm.controls['price'].value,
      Attachement: this.resposeData.Attachement
    } as Auction
    
    var blob: Blob;
    if(files.files && files.files.length > 0){
      blob = files.files[0] as Blob
      this.uploadService.apiUploadPost$Json({ body: { file: blob } })
        .pipe(
          switchMap(d => {
            if(d.Path){
              Auction.Attachement = d.Path;
            }
            return this.contentOrchestrationService.updateAuction(this.id, Auction);
          })
        ).subscribe(() => this.router.navigate(['admin']));
    } else {
      this.contentOrchestrationService.updateAuction(this.id, Auction)
      .subscribe(() => {
        this.router.navigate(['admin'])
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['admin']);
  }

}
