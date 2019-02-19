import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomunatPage } from './komunat.page';

describe('KomunatPage', () => {
  let component: KomunatPage;
  let fixture: ComponentFixture<KomunatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomunatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomunatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
