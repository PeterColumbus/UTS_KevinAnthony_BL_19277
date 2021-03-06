import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
})
export class ProductDetailPage implements OnInit {
  loadedProduct: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("productId")) {
        return;
      }
      const productId = paramMap.get("productId");
      this.loadedProduct = this.productsService.getProduct(productId);
    });
  }
}
