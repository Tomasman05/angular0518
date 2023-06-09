import { TestBed, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Empty',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
  });
  it('Udvozles',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
    const h1 = appElements.querySelector("#welcome");
    expect(h1.textContent).toContain('Szaszte');
  });
  it('UserName',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;

    const h2 = appElements.querySelector("h2");
    app.userName="Cica";
    fixture.detectChanges();
    expect(h2.textContent).toContain(app.userName)
  });
  it('TemplateInput',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;

    const adatInput = appElements.querySelector("#adat")
    adatInput.value = "asd"
    fixture.detectChanges();
    adatInput.dispatchEvent(new Event('input'))
    expect(adatInput.value).toEqual(app.adat);
  });
  it('Revers',fakeAsync(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;

    const adatInput = appElements.querySelector("#adat")
    app.adat="nyuszika";
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      expect(app.adat).toEqual(adatInput.value)
    })
  }));
  // it(`should have as title 'Kezdetek'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Kezdetek');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Kezdetek app is running!');
  // });
});
