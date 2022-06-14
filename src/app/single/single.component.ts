import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent {

  id: string | undefined;
  type: string = "blog";
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
  
    this.route.queryParams
      .subscribe(params => {
        //console.log(params); // { orderby: "price" }
        this.id = params['id'];
        if(params['type'] !== undefined){
          this.type = params['type'];
        }
      }
    );
    
  }

}
