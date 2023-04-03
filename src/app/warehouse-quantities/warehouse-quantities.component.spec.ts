import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseQuantitiesComponent } from './warehouse-quantities.component';

describe('WarehouseQuantitiesComponent', () => {
  let component: WarehouseQuantitiesComponent;
  let fixture: ComponentFixture<WarehouseQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseQuantitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
