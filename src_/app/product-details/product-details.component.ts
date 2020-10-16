import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { IProduct } from '../../services/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  productDetails: IProduct;
  loading:boolean;
  constructor(private route: ActivatedRoute, private _product: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id')
        this._product.getProductDetails(this.id)
          .subscribe(data => {
            this.productDetails = data;
            this.loading = false;
          })
      });
  }

}
