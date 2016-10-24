/// <reference path="../jquery.d.ts" />
import { Component } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'cardlist',
    template: `
   <section id="partners" class="bg-light-gray">
   <div class="container-fluid">
      <div class="row">

         <div class=" col-sm-12 col-md-4 col-lg-2"style="padding-top:145px;min-width:260px; ">
            <div>
               <h4 class="card-title" style="margin-bottom:.50rem;">Települések</h4>
               <ng2-completer [(ngModel)]="searchStr" styles=" border-radius: 15px;"id="ngcompeter"
               (selected)="onCountrySelected($event)" [dataService]="dataService"  [minSearchLength]="0"
               placeholder="Település" (onfocusout)="outoffocus($event)" 
               style="margin-bottom:.50rem;background-color:#eeeeee;">
               </ng2-completer>
            </div>

            <h4 class="card-title" style="margin-top:100px;">Katergóriák</h4>

            <div style=" max-height:700px;overflow-y:auto; ">
               <ul class="list-group" >
                  <li *ngFor="let category of categoriesToShow" class="list-group-item lime lighten-4" style="cursor: pointer; font-family:'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif" (click)="selectCategory($event)">
                 <b>{{category}}   </b>                
                  <span class="tag bg-custom label-pill pull-xs-right">{{categoriesWithCounts[category]}}</span>
                  </li>                  
               </ul>
            </div>            
         </div>


         <div class="container">
            <div class="row" style="max-height:90px;">
               <div class="col-xs-12 col-sm-12 col-md-6 text-left">
                  <h2 class="section-heading">Partnereink</h2>
                  <h3 class="section-subheading text-black">A cégek akiket az újságon keresztül reklámozunk.</h3>
               </div>
            </div>

            <div class="row" style="max-height:55px;">
               <div class="col-xs-6 col-sm-6 col-md-2 offset-md-10 offset-sm-6 offset-xs-6" >
                  <searchbar (searchChanged)="searchChanged($event)"></searchbar>
               </div>              
            </div>

            <div class="row">
               <div *ngFor="let company of companiesToShow | paginate: { itemsPerPage: 8, currentPage: p }">
                  <card  [company]="company"></card>
               </div>


            <div id="sticker" class="sticker">
              <div class="row">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Little_island_colour_logo_200x200.jpg" style="max-width:200;max-height:200;">               
               </div>
              <div class="row">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Little_island_colour_logo_200x200.jpg" style="max-width:200;max-height:200;">               
               </div>
              <div class="row">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Little_island_colour_logo_200x200.jpg" style="max-width:200;max-height:200;">               
               </div>
              <div class="row">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Little_island_colour_logo_200x200.jpg" style="max-width:200;max-height:200;">               
               </div>               
             </div>

               <p *ngIf="companiesToShow && companiesToShow.lenght == 0" class="text-xs-center">Nincs a keresésnek megfelelő cég.</p>
               
            </div>
            <div class="row">
               <div class="text-md-center">
                  <pagination-controls directionLinks="false" (pageChange)="p = $event"></pagination-controls>
               </div>
            </div>
         </div>         <!--cont end-->            
      </div>      <!--BIG row end-->
   </div>   <!--cont fluid end-->
</section>

 
    `,
    providers: [CompaniesService]
})
export class CardlistComponent {

    private dataService: CompleterData;
    searchData = [];

    companies: any[];
    companiesToShow: any[];

    defaultCategory: boolean = true;

    selecetedLocation: any;
    testColor = "lime darken-4";

    categoriesWithCounts: any;
    categoriesToShow: any;
    displayAll: boolean = false;

    constructor(companyService: CompaniesService, private completerService: CompleterService) {
        this.companies = companyService.getCompanies();
        this.companiesToShow = this.companies;

         this.companiesToShow.sort(function (a, b) {
            if (a.rank < b.rank) return 1;
            if (a.rank > b.rank) return -1;
            return 0;
        })


        var searchData = [];
        var categoryData = [];
        $.each(this.companies, function (i, el) {
            if ($.inArray(el.city, searchData) === -1) searchData.push(el.city);
        });

        searchData.forEach(element => {
            this.searchData.push({ city: element })
        });
       

        this.dataService = completerService.local(this.searchData, 'city', 'city');
    }

    searchChanged(searchText) {
        if (searchText == "") {
            this.companiesToShow = new Array<any>();
            if (this.selecetedLocation !== "" && this.selecetedLocation !== "#") {
                console.log("asd " + this.selecetedLocation)
                this.companies.forEach(element => {
                    if (element.city.toUpperCase().indexOf(this.selecetedLocation.toUpperCase()) !== -1) {
                        this.companiesToShow.push(element);
                    }
                });
            }
            else {
                this.companiesToShow = this.companies;
            }
        }
        else {
            this.companiesToShow = new Array<any>();
            this.companies.forEach(element => {
                if (element.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1) {
                    this.companiesToShow.push(element);
                }
            });
        }

         this.companiesToShow.sort(function (a, b) {
            if (a.rank < b.rank) return 1;
            if (a.rank > b.rank) return -1;
            return 0;
        })
    }

    selectCategory(value) {

        var checkedValues = value.target.innerText.split(" ");

        this.companiesToShow = new Array<any>();
        this.companies.forEach(element => {

            if (checkedValues[0].toString().toUpperCase().indexOf(element.category.toUpperCase()) !== -1) {
                if (this.selecetedLocation == "#") {
                    this.companiesToShow.push(element);
                }
                else {
                    if (this.selecetedLocation.toString().toUpperCase().indexOf(element.city.toUpperCase()) !== -1) {
                        this.companiesToShow.push(element);
                    }
                }
            }
        });

        this.companiesToShow.sort(function (a, b) {
            if (a.rank < b.rank) return 1;
            if (a.rank > b.rank) return -1;
            return 0;
        })

    }

    onCountrySelected(selected: CompleterItem) {
        this.selecetedLocation = selected.title;

        if (this.selecetedLocation == "#")
        { this.displayAll = true; }
        else
        { this.displayAll = false; }

        this.companiesToShow = new Array<any>();
        this.categoriesWithCounts = new Array<any>();
        this.companies.forEach(element => {

            if (element.city.toUpperCase().indexOf(this.selecetedLocation.toUpperCase()) !== -1 && !this.displayAll || this.displayAll) {

                this.companiesToShow.push(element);

                if (element.category in this.categoriesWithCounts) {
                    this.categoriesWithCounts[element.category] += 1;
                }
                else {
                    this.categoriesWithCounts[element.category] = 1;
                }
            }
        });
        this.categoriesToShow = Object.keys(this.categoriesWithCounts);
        this.categoriesToShow.sort((n1, n2) => {
            if (n1 > n2) {
                return 1;
            }

            if (n1 < n2) {
                return -1;
            }

            return 0;
        });
    }

    ngOnInit() {
        var selected: CompleterItem = {
            title: "#",
            description: "",
            image: "",
            originalObject: ""
        };

        this.onCountrySelected(selected);


        var keyups = Observable.fromEvent($("#ngcompeter"), "keyup")
            .map(e => e.target.value)
            .filter(value => value.length == 0)
            .debounceTime(300);
        keyups.subscribe(data => this.onCountrySelected(selected));
    }

} 
