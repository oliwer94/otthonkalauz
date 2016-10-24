import { Component } from '@angular/core'


@Component({
    selector: 'contactForm',
    template: `
    <section id="contact" class="bg-light-gray contact-background">
   <!--Form with header-->
   <div class="container">
      <div class="row">
         <div class="col-lg-12 text-center" style="margin-bottom:25px;">
            <h2 class="section-heading" style="color:#fff;">Kapcsolatfelvétel</h2>
            <h3 class="section-subheading text-black">Alcím kerül ide.</h3>
         </div>
      </div>

      <div class="col-md-12 ">
                    <!--Body-->
                    <form >  
                    <div class="md-form col-md-5 " style="margin-top:10px;">
                        <div class="">
                            <i class="fa fa-user prefix fa-2x" style="margin-top:10px;"></i>
                            <input type="text" id="form1"  style="background-color: white; border-radius:5px;"   class="form-control" placeholder="Kérem adja meg a nevét" [(ngModel)]="emailCreds.name">                            
                        </div>  
                        <div class=""style="margin-top:50px; margin-bottom:50px;">
                            <i class="fa fa-envelope prefix fa-2x" style="margin-top:10px;"></i>
                            <input type="text" id="form2"  style="background-color: white; border-radius:5px;" class="form-control" placeholder="Kérem adja meg az e-mail címét" [(ngModel)]="emailCreds.email">
                        </div>
                        <div class="" >
                            <i class="fa fa-phone prefix fa-2x" style="margin-top:10px;"></i>
                            <input type="text" id="form3" style="background-color: white; border-radius:5px;" class="form-control" placeholder="Kérem adja meg a telefonszámát" [(ngModel)]="emailCreds.phone">
                        </div>                       
                        </div>
                        <div class="md-form col-md-6 offset-md-1" >
                            <textarea class="form-control " id="exampleTextarea" rows="3" placeholder=" Kérem ide írja a megkeresését"  [(ngModel)]="emailCreds.text" style="height: 297px;resize: none; border-radius:5px;background-color:white;"></textarea>
                            <div class="text-xs-center ">
                                <button class=" btn btn-light-gray " (click)="sendEmail">Küldés</button>
                            </div>
                        </div>
                    </form>
               
        </div>
   </div>
</section>

    `
})
export class ContactComponent {

  
} 
