import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmeComponent } from './home.component';

describe('HmeComponent', () => {
  let component: HmeComponent;
  let fixture: ComponentFixture<HmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
