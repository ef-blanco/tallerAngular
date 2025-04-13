import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  standalone: false,
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {


  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  avrg_seasons: number = 0;
  info_serie: string = "";

  getSeries()
  {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;

      let totalSeasons: number = 0;
      let totalShows: number = series.length;
      series.forEach((serie)=> totalSeasons+= serie.seasons);
  
      let resp: number = totalSeasons/totalShows;
      this.avrg_seasons = resp;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  public mostrarCard(id: number)
  {
    if(id==1)
    {
      this.info_serie = `<div class="card">
                                <img class="card-img-top" src="${this.series[0].poster}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${this.series[0].name}</h3>
                                   <p class="card-text">${this.series[0].description}</p>
                                   <a href="${this.series[0].webpage}" class="card-url">${this.series[0].webpage}</a>
                               </div>
                             </div>`
    }

    else if(id==2)
      {
        this.info_serie = `<div class="card">
                                  <img class="card-img-top" src="${this.series[1].poster}" alt="imagenSerie" width="100" height="200">
                                   <div class="card-body">
                                     <h3 class="card-title">${this.series[1].name}</h3>
                                     <p class="card-text">${this.series[1].description}</p>
                                     <a href="${this.series[1].webpage}" class="card-url">${this.series[1].webpage}</a>
                                 </div>
                               </div>`
      }
    
    else if(id==3)
      {
        this.info_serie = `<div class="card">
                                  <img class="card-img-top" src="${this.series[2].poster}" alt="imagenSerie" width="100" height="200">
                                   <div class="card-body">
                                     <h3 class="card-title">${this.series[2].name}</h3>
                                     <p class="card-text">${this.series[2].description}</p>
                                     <a href="${this.series[2].webpage}" class="card-url">${this.series[2].webpage}</a>
                                 </div>
                               </div>`
      }

  else if(id==4)
      {
        this.info_serie = `<div class="card">
                                  <img class="card-img-top" src="${this.series[3].poster}" alt="imagenSerie" width="100" height="200">
                                   <div class="card-body">
                                     <h3 class="card-title">${this.series[3].name}</h3>
                                     <p class="card-text">${this.series[3].description}</p>
                                     <a href="${this.series[3].webpage}" class="card-url">${this.series[3].webpage}</a>
                                 </div>
                               </div>`
      }
  

  else if(id==5)
      {
        this.info_serie = `<div class="card">
                                  <img class="card-img-top" src="${this.series[4].poster}" alt="imagenSerie" width="100" height="200">
                                   <div class="card-body">
                                     <h3 class="card-title">${this.series[4].name}</h3>
                                     <p class="card-text">${this.series[4].description}</p>
                                     <a href="${this.series[4].webpage}" class="card-url">${this.series[4].webpage}</a>
                                 </div>
                               </div>`
      }
      
  else if(id==6)
      {
        this.info_serie = `<div class="card">
                                  <img class="card-img-top" src="${this.series[5].poster}" alt="imagenSerie" width="100" height="200">
                                   <div class="card-body">
                                     <h3 class="card-title">${this.series[5].name}</h3>
                                     <p class="card-text">${this.series[5].description}</p>
                                     <a href="${this.series[5].webpage}" class="card-url">${this.series[5].webpage}</a>
                                 </div>
                               </div>`
      }

  }


}
