import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number;
  lng: number;

  init = false;

  taxistas: Taxista[] = [];

  siguiendoA: string = null;
  siguiendoNombre: string = null;
  
    constructor(afDB: AngularFirestore) {
      afDB.collection('usuarios').valueChanges()
                  .subscribe( ( data: Taxista[] ) => {
                    this.taxistas = data;

                    if (!this.init) {
                      this.lat = data[0].lat;
                      this.lng = data[0].lng;
                      this.init = true; 
                    }
                    
                    if (this.siguiendoA) {
                      data.forEach( taxista => {
                        
                        if (taxista.clave === this.siguiendoA) {
                          this.lat = taxista.lat;
                          this.lng = taxista.lng;

                        }

                      });
                    }

                  });
    }

    seguir( taxista: Taxista ) {
      
      this.siguiendoA = taxista.clave;
      this.siguiendoNombre = taxista.nombre;

      this.lat = taxista.lat;
      this.lng = taxista.lng;
    }

    dejarDeSeguir() {
      this.siguiendoA = null;
      this.siguiendoNombre = null;
    }
}


interface Taxista {
  nombre: string;
  clave: string;
  lat: number;
  lng: number;
}
