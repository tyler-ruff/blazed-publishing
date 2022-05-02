import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent implements OnInit {

  id: string | undefined;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.id = params['id'];
        console.log(this.id); // price
      }
    );
  }

}
