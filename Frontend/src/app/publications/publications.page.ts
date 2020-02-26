import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/entity/publication';
import { PublicationsService } from 'src/app/providers/publications.service';
import { Router } from '@angular/router';


/*export interface Data {
  movies: string;
}*/

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
 
})
export class PublicationsPage {

  /*public data: Data;
  public columns: any;
  public rows: any;*/

   //publication1:Publication = new Publication("Region","Country","Item Type","Sales Channel","Order Priority","Order Date","Order ID","Ship Date","Units Sold","Unit Price","Unit Cost","Total Revenue","Total Cost","Total Profit");
   //publication2:Publication = new Publication("Region","Country","Item Type","Sales Channel","Order Priority","Order Date","Order ID","Ship Date","Units Sold","Unit Price","Unit Cost","Total Revenue","Total Cost","Total Profit");
   //publication3:Publication = new Publication("Region","Country","Item Type","Sales Channel","Order Priority","Order Date","Order ID","Ship Date","Units Sold","Unit Price","Unit Cost","Total Revenue","Total Cost","Total Profit");
   //publication4:Publication = new Publication("Region","Country","Item Type","Sales Channel","Order Priority","Order Date","Order ID","Ship Date","Units Sold","Unit Price","Unit Cost","Total Revenue","Total Cost","Total Profit");
  
  //public items: Array<{  region : string;country : string;itemtype: string,saleschannel : string,
    //orderpriority : string;orderdate  : string;orderid  : string;shipdate : string;unitssold : number;unitprice :number;unitcost : Float32Array;totalrevenue : Float32Array;totalcost :Float32Array;totalprofit : Float32Array}> = [];
  
    //publicationArray:Publication[]=[this.publication1, this.publication2, this.publication3, this.publication4];
  //public items:Array<{publication1, publication2}>=[]
  //usersArrayDDBB = [];

  publications: Publication = {} as Publication;
  publicationDetail: Publication = {} as Publication;
  list: Publication[] = [];
  publication: any = {};
  id: number = 0;
  constructor(private publicationsService: PublicationsService, private router: Router) {

   /* {
      this.columns = [
        { name: 'Name' },
        { name: 'Company' },
        { name: 'Genre' },
        
      ];
  
      this.http.get<Data>('../../assets/movies.json')
        .subscribe((res) => {
          console.log(res)
          this.rows = res.movies;
        });
    }*/


   /* this.publication = new Publication();
    this.publication.id = 1;
    this.publication.title = "Titulo prueba";
    this.publication.main = true;
    this.publication.type = "pagina";
    this.publication.url = [];
    this.publication.published = true;
    this.publication.public = true;
    this.publication.author = "Pepito";
    this.publication.last_editor = "aaaaa";
    this.publication.extract = "ssssss";
    this.publication.cover = "https://images.app.goo.gl/ECKNPsaR8tnmdNQ26";
    this.publication.full_text = "asdasdasdasdasdasdasdasdasd";
    this.publication.version = "nueva";
    this.publication.creation_date = new Date('2020-01-24');
    this.publication.modification_date = new Date('2020-01-24');

    this.list.push(this.publication);*/

    //
  }


  ngOnInit() {
    this.showAll();

  }

  showAll() {
    this.publicationsService.searchAll().then((datos) => {
      this.list = datos as Publication[];
    });

  }

  delete(publications) {
    this.publicationsService.delete(publications).then((datos) => {
      this.showAll();
    });

  }

  detail(publications: Publication) {
    this.router.navigate(["/detail", publications.id])
  }

  searchPublication() {
    this.publicationsService.searchOne(this.id).then((datos) => {
      this.publications = datos;
    });
  }

  edit(publications: Publication) {
    this.router.navigate(["/edit", publications.id])
  }


}
