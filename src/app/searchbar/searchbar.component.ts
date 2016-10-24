
import {Component,Output,EventEmitter} from '@angular/core'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'searchbar',
  template: `

                   <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input id="searchBar" type="text" placeholder="Cég név" style="color: #000000;">
                        </div>
                    </form>
  `
})
export class SearchbarComponent {

  @Output() searchChanged = new EventEmitter<string>();

constructor(){
     
}

ngOnInit()
{  
       var keyups = Observable.fromEvent($("#searchBar"),"keyup")
        .map(e => e.target.value)
        .debounceTime(400)
        .distinctUntilChanged();
        keyups.subscribe(data=>this.searchChanged.emit(data));
}
}
