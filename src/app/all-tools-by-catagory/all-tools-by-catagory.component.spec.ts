import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToolsByCatagoryComponent } from './all-tools-by-catagory.component';

describe('AllToolsByCatagoryComponent', () => {
  let component: AllToolsByCatagoryComponent;
  let fixture: ComponentFixture<AllToolsByCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllToolsByCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllToolsByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
