import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AddnoteComponent } from './addnote.component';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

describe('AddnoteComponent', () => {
  let component: AddnoteComponent;
  let fixture: ComponentFixture<AddnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnoteComponent],
      imports: [HttpClientTestingModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('givenTheFunction_whenClicked_ShouldReturnTrue', () => {
    component.onCloseClick()
    expect(component.panelOpenState).toBeTrue()
  })
});
