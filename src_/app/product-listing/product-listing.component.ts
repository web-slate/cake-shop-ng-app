import { Component } from '@angular/core';
import { IProduct } from '../../services/product.model'
import { ProductService } from '../../services/product.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  providers: [ProductService]
})
export class ProductListingComponent {
  products: IProduct[]
  loading:boolean
  constructor(private _products:ProductService) {}

  ngOnInit(){
    const request = this._products.getProductsList()
    this.loadingSpinner();
    request
    .subscribe(data => {
      this.products = data;
      this.loading = false;
    })
  }

  loadingSpinner(){
    this.loading = true;
    //observe.subscribe(()=>this.loading=false)
  }
}
