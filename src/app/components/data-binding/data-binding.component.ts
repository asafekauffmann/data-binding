import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImagem = 'https://picsum.photos/200/300';
  url: string = 'http://www.google.com';
  cursoAngular: boolean = true;

  valorAtual: string = '';

  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20

  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
