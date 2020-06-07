import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent {
  zoom: number = 18;

  lat: number = 51.1068498;
  lng: number = 17.0380151;

  markers: marker[] = [
    {
      lat: 51.1068498,
      lng: 17.0380151,
      label: '🏛️',
      draggable: true,
    },
  ];
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
