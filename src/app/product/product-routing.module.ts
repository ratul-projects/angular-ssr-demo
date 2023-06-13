import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { SeoMetaService } from '../seo-meta.service';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: {
      userData: SeoMetaService

    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
