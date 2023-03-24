import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWarehouseToolsComponent } from './all-warehouse-tools.component';

describe('AllWarehouseToolsComponent', () => {
  let component: AllWarehouseToolsComponent;
  let fixture: ComponentFixture<AllWarehouseToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWarehouseToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWarehouseToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
