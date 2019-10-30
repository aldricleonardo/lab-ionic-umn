import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookooPage } from './bookoo.page';

describe('BookooPage', () => {
  let component: BookooPage;
  let fixture: ComponentFixture<BookooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
