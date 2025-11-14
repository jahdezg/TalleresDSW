import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeries } from './listar-series';

describe('ListarSeries', () => {
  let component: ListarSeries;
  let fixture: ComponentFixture<ListarSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSeries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSeries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
