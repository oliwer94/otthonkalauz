import {Component} from '@angular/core'


@Component({
    selector: 'navbar',
    template: `
    
      <!-- Start your project here-->
    <!--Navbar-->
    <nav  id="mainNav" class="navbar navbar-dark navbar-fixed-top bg-primary ">
        

        <div class="container ">
 <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
               
                <a class="navbar-brand page-scroll" href="#page-top">Otthon Kalauz</a>
            </div>
            <!--Collapse content-->
            <div class="collapse navbar-toggleable-xs pull-xs-right" id="collapseEx2 ">
               
                <!--Links-->
                <ul class="nav navbar-nav pull-xs-right" style="font-family:'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif">     
                    <li class="nav-item ">
                        <a  class="nav-link page-scroll" href="#partners">Partnereink</a>
                    </li>              
                    <li class="nav-item ">
                        <a  class="nav-link page-scroll" href="#services">Szolgáltatások</a>
                    </li>                    
                    <li class="nav-item ">
                        <a class="nav-link page-scroll" href="#about">Rólunk</a>
                    </li>                    
                </ul>
               
            </div>
            <!--/.Collapse content-->

        </div>

    </nav>
    <!--/.Navbar-->   

    `   
})
export class NavbarComponent {    
} 