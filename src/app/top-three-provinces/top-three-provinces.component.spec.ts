import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeProvincesComponent } from './top-three-provinces.component';

describe('TopThreeProvincesComponent', () => {
  let component: TopThreeProvincesComponent;
  let fixture: ComponentFixture<TopThreeProvincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopThreeProvincesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
