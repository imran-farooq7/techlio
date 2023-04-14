import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public loading = false;
  constructor( private router : Router) { }

  public categories = [
    {
      name: 'All',
      images: [
        { id: 1, path: 'portfolio/port1.jpg' },
        { id: 2, path: 'portfolio/port2.png' },
        { id: 3, path: 'portfolio/port3.png' },
        { id: 4, path: 'portfolio/port4.png' },
        { id: 5, path: 'portfolio/port5.jpg' },
        { id: 6, path: 'portfolio/port6.jpg' },
        { id: 7, path: 'portfolio/port7.jpg' },
        { id: 8, path: 'portfolio/port8.png' },
        { id: 9, path: 'portfolio/port9.png' },
      ],
      categoryHeading: 'All',
    },
    {
      name: 'Web Design',
      images: [
        { id: 10, path: 'portfolio/port1.jpg' },
        { id: 11, path: 'portfolio/port2.png' },
        { id: 12, path: 'portfolio/port3.png' },
      ],
      categoryHeading: 'Web design',
    },
    {
      name: 'Photography',
      images: [
        { id: 13, path: 'portfolio/port4.png' },
        { id: 14, path: 'portfolio/port5.jpg' },
        { id: 15, path: 'portfolio/port6.jpg' },
      ],
      categoryHeading: 'Photography',
    },
    {
      name: 'Graphic Designing',
      images: [
        { id: 16, path: 'portfolio/port7.jpg' },
        { id: 17, path: 'portfolio/port8.png' },
        { id: 18, path: 'portfolio/port9.png' },
      ],
      categoryHeading: 'Graphic Designing',
    },
  ];
  
  currentCategory: any = this.categories[0];
  
  
  ngOnInit(): void {
  }
  showCategory(category: any) {
    this.loading = true;
    setTimeout(() => {
      this.currentCategory = category;
      this.loading = false;
    }, 500);
  }
  gotoDetails(image: any) {
    const id = image.id;
    console.warn(id)
    this.router.navigate(['portfolioDetails', id]);
  }
  
  
}
