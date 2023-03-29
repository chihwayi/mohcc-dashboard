import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToolsComponent } from './transfer-tools.component';

describe('TransferToolsComponent', () => {
  let component: TransferToolsComponent;
  let fixture: ComponentFixture<TransferToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
