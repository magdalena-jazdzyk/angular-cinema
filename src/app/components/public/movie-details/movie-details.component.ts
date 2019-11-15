import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FindTheFirstPageAction, LoadMovieAction, LoadMovieByIdAction} from '../movie.state';
import {LoadVideoAction} from '../state/movie-video.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ImageDto} from '../../../../api/models/image-dto';
import {LoadImageAction, LoadImageInMovieIdsAction} from '../state/image.state';
import {MovieDto, PageMovieDto} from '../../../../api/models';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {


  movieId: number;
  subscription;
  subscriptionUrl;

  @Select(state => state.movieVideo.videos)
  videos$: Observable<SafeResourceUrl[]>;

  @Select(state => state.image.images)
  images$: Observable<ImageDto[]>;

  @Select(state => state.movie.movie)
  movie$: Observable<MovieDto>;

  @Select(state => state.movie.moviePageDto)
  moviesPage$: Observable<PageMovieDto>;

  @Select(state => state.image.imagesByMovieIds)
  imagesByMovieIds$: Observable<ImageDto[]>;


  constructor(public store: Store, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(p => this.movieId = p.id).unsubscribe(); // pobireania filmu z linku
    this.subscriptionUrl = this.activatedRoute.params.subscribe(p => {
      this.movieId = p.id;


      this.store.dispatch(new LoadVideoAction(this.movieId));
      this.store.dispatch(new LoadImageAction(this.movieId));
      this.store.dispatch(new LoadMovieByIdAction(this.movieId));
      this.store.dispatch(new FindTheFirstPageAction());

      this.subscription = this.moviesPage$.subscribe(p => {
        console.log('wartosc p ' + p.content);
        if (p.content !== undefined) {
          const numbers = p.content.map(s => s.id);
          console.log('number' + numbers);
          this.store.dispatch(new LoadImageInMovieIdsAction(numbers));
        }
      });
      console.log('jestem w onInit');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('DESTRY');
    this.subscriptionUrl.unsubscribe();
  }

}
