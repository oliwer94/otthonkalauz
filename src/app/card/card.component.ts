import {Component, Input} from '@angular/core'

@Component({

  selector: 'card',
  template: `        
  
        
<div class="col-md-4 col-sm-6 col-xs-12 col-lg-3 animated zoomIn"  >
     <!--Card-->
<div class="card" style="box-sizing: border-box; max-height:319px;min-height:319px; max-width:255px;">

    <!--Card image-->   
    <div  id="cf" style="position: relative; left: 0; top: 0;">
    <img class="bottom img-fluid" src="{{company.location}}" style="position: relative; top: 0; left: 0;" />
      <img class="top img-fluid" src="{{company.image}}" style="position: absolute; top: 0px; left: 0px;" />
      </div>
    <!--/.Card image-->

    <!--Card content-->
    <div class="card-block" style="max-height:162px">
        <!--Title-->
        <h4 class="card-title" style="margin-bottom:0rem;">{{company.name}}</h4>
        <!--Text-->
        <p class="card-text text-black">{{company.category}}<br>{{company.city}}</p>

       <!--   <a class="btn btn-primary pull-xs-right" href="{{company.url}}" role="button">Tovább</a> -->
       <a href="{{company.url}}" class="pull-xs-right"><i class="fa fa-angle-right fa-2x pull-xs-right"></i></a>
    </div>
    <!--/.Card content-->

</div>
<!--/.Card-->
    `
})

export class CardComponent {
  @Input() company;
  imgSrc;  

  
  mouseover() {
   this.imgSrc = this.company.location;
  }
mouseleave() {
   this.imgSrc = this.company.image;
  }
 ngOnInit() {
   this.imgSrc= this.company.image; // object here
  }

}
