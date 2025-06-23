import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimations } from '@angular/platform-browser/animations';  // ← nuevo

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideAnimations()   // ← habilita las animaciones de Material
  ],
});
