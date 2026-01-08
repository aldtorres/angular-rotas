//resolvers => permite resolver a requisição resggantando os dados e ap´s ter acesso permite ter acesso a rota
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as dados from "../db.json";
import { Postagem } from '../models/post.model';

export const postResolver: ResolveFn<Postagem | undefined> = (rota: ActivatedRouteSnapshot) => {
  //return true;
  const id = rota.paramMap.get("id");
  const posts: Postagem[]= dados.posts;
  return posts.find(x=> x.id === id);
};
