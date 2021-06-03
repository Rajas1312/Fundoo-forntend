import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatMenuModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('givenTheFunction_whenClicked_ShouldReturnTrue', () => {
    component.onToolBarToggle()
    expect(component.isMenuOpen).toBeTruthy()
  })

  it('givenTheArchive_whenClicked_ShouldReturnTrue', () => {
    component.onArchiveClick();
    expect(component.archiveClick).toBeFalse()
  })

  it('givenThetrashClick_whenClicked_ShouldReturnTrue', () => {
    component.onTrashClick();
    expect(component.trashClick).toBeFalse()
  })

  it('givenTheNotesClick_whenClicked_ShouldReturnTrue', () => {
    component.onNotesClick()
    expect(component.notesclick).toBeFalse()
  })

});
