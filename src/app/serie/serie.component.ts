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

  getSeries()
  {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;

      let totalSeasons: number = 0;
      let totalShows: number = series.length;
      console.log(series);
      console.log(totalShows);
      series.forEach((serie)=> totalSeasons+= serie.seasons);
  
      let resp: number = totalSeasons/totalShows;
      this.avrg_seasons = resp;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
