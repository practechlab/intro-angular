import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BeerModel } from '../BeerModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  beers: BeerModel[]=[];
  
  constructor(private apiService:ApiService) {




   }

  ngOnInit(): void {

    this.apiService.getBeers().subscribe((beers)=>{
      
      this.beers=beers;
    });

  }


}
