import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsManualComponent } from './forms-manual.component';

describe('FormsManualComponent', () => {
  let component: FormsManualComponent;
  let fixture: ComponentFixture<FormsManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
