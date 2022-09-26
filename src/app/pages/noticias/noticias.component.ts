import { Component, OnInit } from '@angular/core';

import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any  = [];
  cargando: boolean = false;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  constructor(private servicioDeNoticias: NoticiaService) {}

  ngOnInit(): void {}

  buscar(e?: any): void {

    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
      },
      error: (err: any) => {
        console.log('Ocurrio un error');
      }
    });
  }
}