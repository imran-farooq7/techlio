import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background: linear-gradient(109.64deg, #1d1a1f -0.28%, #2f3f4b 100%);
      }
    `,
  ],
})
export class PortfolioDetailComponent implements OnInit {
  imgSrc: string | undefined;
  closeResult: string = '';

  public detailImages: any;
  public id: number | undefined;
  // modal: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      // const detailImages =
      //   this.route.snapshot.queryParamMap.getAll('detailImages'); // Get the detail images array from the route parameters
      // if (detailImages) {
      //   this.detailImages = detailImages; // Parse the JSON string to an array if detailImages is defined and not null
      // }
      this.detailImages = window.history.state.images;
      console.log(this.id);
      console.log(this.detailImages);
    });
  }
  onClick(event: any, content: any) {
    this.modalService
      .open(content, {
        // fullscreen: true,
        centered: true,
        windowClass: 'dark-modal',
        // size: 'xl',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
    console.log(this.imgSrc);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  goback() {
    this.location.back();
  }
}
