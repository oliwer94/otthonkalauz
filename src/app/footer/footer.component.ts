
import {Component} from '@angular/core'

@Component({
    selector: 'footerSection',
    template: `
    

 <footer class=" bg-black" style="color:#ffffff;">
    <div class="container">
      <div class="row">
        <div class="footer-col col-md-6 text-xs-center">
          <h3><br>Telephely</h3>
          <p>Kis Árpád utca 33,
            <br>Győr, 9024</p>
        </div>
        <div class="footer-col col-md-6 text-md-center">
          <h3><br>Elérhetőség</h3>
          <p>Telefon:  +36 20/ xxx xxx xx
          <br> Email:  email@email.email
          <br> Postafiók:  pf</p>
        </div>
      </div>
    </div>
  </footer>


    `   
})
export class FooterComponent {    
} 