import { Component } from '@angular/core';
import {
  faDashboard,
  faHand,
  faList,
  faUpload,
  faAdd,
  faWarehouse,
  faShare
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faHand = faHand;
  faList = faList;
  faUpload = faUpload;
  faAdd = faAdd;
  faWarehouse = faWarehouse;
  faShare = faShare;
}
