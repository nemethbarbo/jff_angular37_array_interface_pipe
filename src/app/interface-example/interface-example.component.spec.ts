import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleComponent } from './interface-example.component';

describe('InterfaceExampleComponent', () => {
  let component: InterfaceExampleComponent;
  let fixture: ComponentFixture<InterfaceExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceExampleComponent]
    });
    fixture = TestBed.createComponent(InterfaceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
