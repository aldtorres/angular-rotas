import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPostagemComponent } from './lista-postagem.component';
import { RouterModule, Routes } from '@angular/router';
//colocar o roteamento dentro do modulo!
const rotas: Routes = [
  {
    path: "", //fica associada a rota /posts
    component: ListaPostagemComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rotas)
  ]
})
export class ListaPostagemModule { }
