import { Component, OnInit } from '@angular/core';
import { Bookoo } from '../bookoo.model';
import { BookooService } from '../bookoo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-utama',
  templateUrl: './utama.page.html',
  styleUrls: ['./utama.page.scss'],
})
export class UtamaPage implements OnInit {
  bookoo: Bookoo;
  loadedBookoos: Bookoo[];

  constructor(
    private bookooService: BookooService,
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController) 
    { }

  ngOnInit() {
    this.loadedBookoos = this.bookooService.bookoo;
  }

  profile(){
    this.modalCtrl.create({ component: ProfileComponent})
      .then(modalElement => {
        modalElement.present();
      })
  }

  favorites(bookoo: Bookoo) {
    this.bookooService.addToMyFavorites(bookoo);
    console.log("masuk "+ bookoo.name);
  }

}
