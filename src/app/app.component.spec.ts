import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, AppComponent] // Import standalone component directly
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'smart-home-frontend' title`, () => {
    expect(component.title).toEqual('smart-home-frontend');
  });

  it('should render title in an h1 tag', () => {
    component.title = 'smart-home-frontend';  // Ensure the title is set correctly
    fixture.detectChanges();  // Trigger change detection to reflect updates in the DOM
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('smart-home-frontend');
  });
});
