import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tools-by-provinces',
  templateUrl: './all-tools-by-provinces.component.html',
  styleUrls: ['./all-tools-by-provinces.component.css']
})
export class AllToolsByProvincesComponent {

  transactions = [
    {
      id: 1,
      title: "Green Book",
      location: "Midlands",
      status: "available"
    },
    {
      id: 2,
      title: "HTS Register",
      location: "Masvingo",
      status: "requested"
    },
    {
      id: 3,
      title: "ART Register",
      location: "Harare",
      status: "out of stock"
    },
    {
      id: 4,
      title: "Green Book",
      location: "Midlands",
      status: "available"
    },
    {
      id: 5,
      title: "HTS Register",
      location: "Masvingo",
      status: "requested"
    },
    {
      id: 6,
      title: "STI Register",
      location: "Harare",
      status: "out of stock"
    }
  ];

}
