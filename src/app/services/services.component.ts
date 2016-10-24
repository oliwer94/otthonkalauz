import {Component} from '@angular/core'

@Component({

    selector: 'wp-services',
    template: `        
     
       <!-- Services Section -->
  <section id="services" class="bg-light-gray">
  
    <div class="container ">

      <div class="row ">
        <div class="col-lg-12 text-center ">
          <h2 class="section-heading ">Szolgáltatások</h2>
          <h3 class="section-subheading text-black ">Alcím bármi lehet itt.</h3>
        </div>
      </div>

      <div class="row text-xs-center" >
       
        <div class="wow fadeInLeft col-md-4 ">
          <span class="fa-stack fa-4x ">
                        <i class="fa fa-circle fa-stack-2x text-primary "></i>
                        <i class="fa fa-shopping-cart fa-stack-1x fa-inverse "></i>
                    </span>
          <h4 class="service-heading ">Hirdetés</h4>
          <p class="text-black ">Ennek a szolgáltatásnak a leírása kerül ide</p>
        </div>

        <div class="wow fadeInLeft col-md-4 ">
          <span class="fa-stack fa-4x " >
                        <i class="fa fa-circle fa-stack-2x text-info-d-blue " ></i>
                        <i class="fa fa-laptop fa-stack-1x fa-inverse " ></i>
                    </span>
          <h4 class="service-heading ">Regionális ??</h4>
          <p class="text-black ">Ennek a szolgáltatásnak a leírása kerül ide</p>
        </div>
        
        <div class="wow fadeInLeft col-md-4">
          <span class="fa-stack fa-4x ">
                        <i class="fa fa-circle fa-stack-2x text-info-d-blue "></i>
                        <i class="fa fa-lock fa-stack-1x "></i>
                    </span>
          <h4 class="service-heading ">3. példa szolg</h4>
          <p class="text-black ">Ennek a szolgáltatásnak a leírása kerül ide </p>            
        </div>
      
      </div>

    </div>
  </section>

    `
})

export class ServicesComponent {   
}
