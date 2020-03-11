import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNoAgentComponent } from './forms-no-agent.component';

describe('FormsNoAgentComponent', () => {
  let component: FormsNoAgentComponent;
  let fixture: ComponentFixture<FormsNoAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsNoAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsNoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
