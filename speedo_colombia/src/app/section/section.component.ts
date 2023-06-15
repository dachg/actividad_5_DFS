import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{

  products: { imagen: string ; 
              nombre : string ;
              precio : number ;
              producto_id : number
            }[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response;
        console.log("products ", this.products);
        console.log("response ", response.products);
      },
      (error: any) => {
        console.log('Error al obtener las imágenes del banner:', error);
      }
    );
  }
}