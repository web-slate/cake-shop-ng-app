import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from '../components/common/home/home.component';
import { HeaderComponent } from '../components/common/header/header.component';
import { FooterComponent } from '../components/common/footer/footer.component';
import { NotFoundComponent } from '../components/common/not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, MatGridListModule, MatToolbarModule, MatIconModule],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule {}
