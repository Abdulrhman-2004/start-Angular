import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor() {
    // this.show()
  }
  unshow() {
    let x = document.getElementById("layarBox");
    x?.classList.add('d-none');
  }

  show() {

    let x = document.getElementById("layarBox");
    x?.classList.remove('d-none');
  }

}
