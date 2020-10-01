import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
sub: Subscription;


  constructor(private service: DataStorageService){}



  getData() {
   this.sub = this.service.fetchRecipes().subscribe();

  }

  onSaveData() {
    this.service.storeRecipes();

  }

}
