import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: [
  ]
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zonaCampeche = true;
  zonaCarmen = false;
  zonaMerida = false;
  zonaNorte = false;
  zonaSur = false;

}
