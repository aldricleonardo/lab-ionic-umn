import { Component, OnInit } from '@angular/core';
import { Bookoo } from '../bookoo.model';
import { BookooService } from '../bookoo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {
  loadedBookoo: Bookoo[];

  constructor(private bookooService: BookooService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadedBookoo = this.bookooService.getMyFavorites();
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }


  async remove(bookoo : string) {
    const alert = await this.alertController.create({
      message: 'Yakin mau hapus dari favorit?',
      buttons: [
        {
          text: 'Gak Jadi',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Batal');
          }
        }, {
          text: 'Yakin',
          handler: () => {
            this.bookooService.removeFromMyFavorites(bookoo);
            this.ionViewWillEnter();
            console.log("muncul"+ bookoo);
          }
        }
      ]
    });

    await alert.present();
  }
}
