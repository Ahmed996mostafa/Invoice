import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInoviceComponent } from './add-inovice.component';

describe('AddInoviceComponent', () => {
  let component: AddInoviceComponent;
  let fixture: ComponentFixture<AddInoviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInoviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInoviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
