import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Auction } from 'src/app/api/models/auction';
import { ConfirmationsService } from 'src/app/services/confrimation.service';

interface TableAuction {
  Id: string,
  Title: string,
  Date: string,
  Body: string,
  Price: string,
  Attachement: string
}

@Component({
  selector: 'app-admin-auctions',
  templateUrl: './admin-auctions.component.html',
  styleUrls: ['./admin-auctions.component.scss']
})
export class AdminAuctionsComponent implements OnInit {
  @Input() auctions!: Auction[];
  @Output() auctionToDelete = new EventEmitter<Auction>();
  
  public loading = true;
  public dataSource = new MatTableDataSource<TableAuction>();
  public displayedColumns = [
    'Id',
    'Title',
    'Date',
    'Price',
    'Body',
    'Attachement',
    'Edit',
    'Delete'
  ]
  private tableAuctions: TableAuction[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationsService: ConfirmationsService) { }

    ngOnInit(): void {
    }
  
    ngOnChanges(): void {
      if(this.auctions) {
        this.tableAuctions = this.auctions.map(d => {
          return {
            Id: d.Id as string,
            Title: d.Title as string,
            Date: d.Date as string,
            Body: d.Body = d.Body?.substring(0,150) + '...' as string,
            Price: d.Price as string,
            Attachement: d.Attachement as string
          }
        })
      }
      this.dataSource.data = this.tableAuctions;
    }
  
    deleteAuction(auction: Auction) {
      this.confirmationsService.confirm({
        message: `Czy aby na pewno chcesz usunąć ten artykuł ?`,
        action: () => {
          this.loading = true;
          this.emitAuctionToDelete(auction);
        },
      });
    }
  
    emitAuctionToDelete(auction: Auction) {
      this.auctionToDelete.emit(auction);
    }
  
    editAuction(auction: Auction) {
      this.router.navigate(['auctions/edit', auction.Id], { relativeTo: this.route });
    } 
  
    createAuction() {
      this.router.navigate(['auctions/create'], { relativeTo: this.route })
    }

}
