import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { LoadMovieAction } from '../state/movie.actions';
import { Observable } from 'rxjs';
import { PageMovieDto } from 'src/app/api/models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  displayedColumns : string[]=["id","title","genre","price"]

  @Select(state=>state.movie.moviePageDto)
  moviesPage$ : Observable<PageMovieDto> 
  constructor(public store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadMovieAction(0,5));
  }

  changePage(event){
    console.log(event)
    this.store.dispatch(new LoadMovieAction(event.pageIndex,event.pageSize));
 // dispatch uruchamia akcje ze state
 // state przecowuje zmienne stan aplikacji

  }

}
