import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Import the main AppModule

platformBrowserDynamic()
    .bootstrapModule(AppModule)  // Bootstrap the AppModule
    .catch((err) => console.error(err));
