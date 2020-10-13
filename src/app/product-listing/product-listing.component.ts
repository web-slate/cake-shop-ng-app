import { Component } from '@angular/core';
import { IProduct } from '../../services/product.model'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  providers: [ProductService]
})
export class ProductListingComponent {
  products: IProduct[]
  constructor(private _products:ProductService) {}

  ngOnInit(){
    this._products.getProductsList()
    .subscribe(data => this.products = data)
  }
}
