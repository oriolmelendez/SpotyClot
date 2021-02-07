import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitsComponent } from './preferits.component';

describe('PreferitsComponent', () => {
  let component: PreferitsComponent;
  let fixture: ComponentFixture<PreferitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
