import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToolsByProvincesComponent } from './all-tools-by-provinces.component';

describe('AllToolsByProvincesComponent', () => {
  let component: AllToolsByProvincesComponent;
  let fixture: ComponentFixture<AllToolsByProvincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllToolsByProvincesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllToolsByProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
