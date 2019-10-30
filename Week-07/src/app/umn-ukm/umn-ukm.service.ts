import { Injectable } from '@angular/core';
import { Ukm } from './umn-ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UmnUkmService {

  private _ukm: Ukm[] = [
    new Ukm('ukm1', 'Ulson', 'nyanyi nyanyi'),
    new Ukm('ukm2', 'Katak', 'Teaterrrrrrrrrrr'),
    new Ukm('ukm3', 'Basket', 'dribble dribble'),
    new Ukm('ukm4', 'Futsal', 'kapten tsubasa'),
    new Ukm('ukm5', 'Volley', 'Passing passing'),
  ];

  private myUkms: Ukm[] = [];

  constructor() { }
  
  addToMyUkms(ukm: Ukm){
    this.myUkms.push(ukm);
  }

  removeFromMyUkms(id: string){
    this.myUkms = this.myUkms.filter(ukm => {
      return ukm.id !== id;
    })
  }

  getMyUkms(){
    return[...this.myUkms];
  }

  get Ukm(){
    return [...this._ukm];
  }
}
