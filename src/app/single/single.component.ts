import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent {

  id: string | undefined;
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
  
    this.route.queryParams
      .subscribe(params => {
        //console.log(params); // { orderby: "price" }
        //console.log(this.id); // price
        this.id = params['id'];
      }
    );
    
  }

}
