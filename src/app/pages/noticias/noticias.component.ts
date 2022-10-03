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
  current: any = {title:'Ejemplo'};

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {}

  buscar(e?: any): void {

    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe({
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

  selectNoticia(noticia: any) {
    this.current = noticia;
    this.noticiaService.setCurrentNoticia(noticia);
  }

  clearCurrent() {
    this.current = {};
  }
}