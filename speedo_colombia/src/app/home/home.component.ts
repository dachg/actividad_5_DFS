import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  images: { imagen: string }[] = [];
  activeIndex = 0; // Variable para el índice activo del carrusel

  constructor(private imageService: ImageService) { }
  
  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe(
      (response: any) => {
        this.images = response;
        console.log("images ", this.images);
        console.log("response ", response.imagen);
      },
      (error: any) => {
        console.log('Error al obtener las imágenes del banner:', error);
      }
    );
  }

  startCarousel() {
    setInterval(() => {
      // Incrementar el índice activo
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 4000); // Cambia la imagen cada 4 segundos
  }
}