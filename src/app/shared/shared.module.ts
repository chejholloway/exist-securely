import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CardComponent, ReactiveFormsModule, FormsModule, LoaderComponent, SearchPipe],
  declarations: [CardComponent, LoaderComponent, SearchPipe]
})
export class SharedModule {}
