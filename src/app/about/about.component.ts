
import {Component} from '@angular/core'


@Component({
    selector: 'about',
    template: `

         <!-- About Section -->
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 text-center">
          <h2 class="section-heading">A Cégről</h2>
          <h3 class="section-subheading text-black">Itt lehet pár mondatot írni a cégről. Megemlíteni ki vezeti.De nem kéne pár sornál többnek lennie.</h3>
        </div>
        <div class="col-lg-4 text-center m-x-auto">
        <div class="text-xs-center">
               <img class="timeline-image  img-responsive" src="assets/img/man-head-face-avatar-blue-generic-male.png" alt="">
          </div>
          </div>
      </div>
    </div>
  </section>   
  

    `   
})
export class AboutComponent {    
} 