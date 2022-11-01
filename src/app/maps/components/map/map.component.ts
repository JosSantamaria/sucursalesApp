import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements OnInit {



  zonaCampeche = true;
  zonaCarmen = false;
  zonaMerida = false;
  zonaNorte = false;
  zonaSur = false;

  constructor() { }

  ngOnInit(): void {
  }

}
