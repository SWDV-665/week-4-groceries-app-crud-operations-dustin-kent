
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public dataService: GroceriesServiceService, public alertCtrl: AlertController) {
    console.log("Hello InputDialogServiceProvider");
   }


  async showPrompt(item?:any, index?: number) {
    const prompt = await this.alertCtrl.create({
      header: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item...": "Please enter item",
      inputs: [
        {
          name: "name",
          placeholder: "Name",
          value: item ? item.name : null
        },
        {
          name: "quantity",
          placeholder: "Quantity",
          value: item ? item.quatity : null
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel Clicked");
          }
        },
        {
          text: "Save",
          handler: item => {
            console.log("Saved Clicked", item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
