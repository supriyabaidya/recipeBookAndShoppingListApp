import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  featureType = 'shopping_list';

  onFeatureSelected(feature: string) {
    this.featureType = feature;
  }
}
