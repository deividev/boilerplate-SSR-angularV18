import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Angular18-boilerplate' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular18-boilerplate');
  });

  it('should match the snapshot', async () => {
    const { container } = await render(AppComponent);
    expect(container).toMatchSnapshot();
  });
});
