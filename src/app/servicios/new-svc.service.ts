import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Noticia } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NewSvcService {

private noticiascollection?: AngularFirestoreCollection<Noticia>;

  constructor(private readonly afs: AngularFirestore) { }


  public getNews(): Observable<Noticia[]>{
         
    this.noticiascollection = this.afs.collection<Noticia>('noticias', p=>
     p.orderBy('order','asc'));
 
    return this.noticiascollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Noticia;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }


}
