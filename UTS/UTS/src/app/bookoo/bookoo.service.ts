import { Injectable } from '@angular/core';
import { Bookoo } from './bookoo.model';

@Injectable({
  providedIn: 'root'
})
export class BookooService {

  private _bookoo: Bookoo[] = [
    new Bookoo('bookoo1','Harry Potter', 'A story about a young magician.', 'https://i.pinimg.com/originals/d8/ae/fb/d8aefbc28fb35321dc2924fd4088e551.jpg', 'Categori Fiction'),
    new Bookoo('bookoo2','Chicken Soup', 'A novel about a slice of life.', 'https://www.thewrap.com/wp-content/uploads/2014/10/chicken-soup-for-the-soul-logo.jpg', 'Category Non-Fiction'),
    new Bookoo('bookoo3', 'Doraemon', 'A cat from the far future.', 'http://www.transparentpng.com/thumb/doraemon/2RyPIB-doraemon-face-clipart-photo.png', 'Category Fiction'),
    new Bookoo('bookoo4','Eragon', 'A fairy tale about a dragon.', 'https://image.freepik.com/free-vector/eragon-vector-logo-icon-illustration-mascot_1893-975.jpg', 'Category Fiction')
  ];

  get bookoo(){
    return [...this._bookoo];
  }

  private myFavorites: Bookoo[] = [];

  constructor() { }

  addToMyFavorites(p: Bookoo) {
    this.myFavorites.push(p);
  }

  removeFromMyFavorites(id: string){
    this.myFavorites = this.myFavorites.filter(p => {
      return p.id !== id;
    });
  }

  getMyFavorites() {
    return[...this.myFavorites];
  }

  get favorites(){
    return[...this._bookoo];
  }
}
