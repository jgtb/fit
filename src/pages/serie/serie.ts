import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLiteObject } from '@ionic-native/sqlite';

import { SerieSQLite } from '../../sqlite/serie/serie';

import { DashboardPage } from '../../pages/dashboard/dashboard';
import { TreinoFormPage } from '../../pages/treino-form/treino-form';

import { Util } from '../../util';

@IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage {

  data: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public serieSQLite: SerieSQLite, public util: Util) {}

  ionViewDidEnter() {
    this.select();
  }

  ionViewDidLoad() {}

  select() {
    this.serieSQLite.startDatabase().then((db: SQLiteObject) => { db.executeSql('SELECT * FROM serie', []).then(
      result => {
        let arr = [];

        for (var i = 0; i < result.rows.length; i++) {
          arr.push(result.rows.item(i));
        }

        this.data = arr.filter((elem, index, arr) => {
          return arr.map(obj => obj['id']).indexOf(elem['id']) === index;
        });

      });
    });
  }

  create(item) {
    this.navCtrl.push(TreinoFormPage, {item: item});
  }

  goToDashboard() {
    this.navCtrl.push(DashboardPage);
  }

}