import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/api/services/upload.service';

@Component({
  selector: 'app-admin-auctions-create',
  templateUrl: './admin-auctions-create.component.html',
  styleUrls: ['./admin-auctions-create.component.scss']
})
export class AdminAuctionsCreateComponent implements OnInit {
  filename = '';
  fileOutputPath = '';

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
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

}
