import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@nx-angular-data/material';

import { AppComponent } from './app.component';
import { CoreDataModule} from '@nx-angular-data/core-data';
import { UiToolbarModule } from '@nx-angular-data/ui-toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, UiToolbarModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
