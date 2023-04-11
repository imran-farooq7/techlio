import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  id: number | undefined;
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      // this.productId = val['id'];
      this.id = +params['id'];
    });
  }

}
