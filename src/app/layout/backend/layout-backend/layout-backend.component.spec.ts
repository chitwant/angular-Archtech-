import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBackendComponent } from './layout-backend.component';

describe('LayoutBackendComponent', () => {
  let component: LayoutBackendComponent;
  let fixture: ComponentFixture<LayoutBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
