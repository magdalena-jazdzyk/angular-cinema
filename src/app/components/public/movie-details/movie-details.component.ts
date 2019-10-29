import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoadMovieAction, LoadMovieByIdAction} from '../movie.state';
import {LoadVideoAction} from '../state/movie-video.state';
import {Select, Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {RepertoireDto} from '../../../../api/models/repertoire-dto';
import {VideoDto} from '../../../../api/models/video-dto';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ImageDto} from '../../../../api/models/image-dto';
import {LoadImageAction} from '../state/image.state';
import {PageMovieDto} from '../../../../api/models/page-movie-dto';
import {MovieDto} from '../../../../api/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;

  @Select(state => state.movieVideo.videos)
  videos$: Observable<SafeResourceUrl[]>;

  @Select(state => state.image.images)
  images$: Observable<ImageDto[]>;

  @Select(state => state.movie.movie)
  movie$: Observable<MovieDto>;

  constructor(public store: Store, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.movieId = p.id).unsubscribe(); // pobireania filmu z linku
    this.store.dispatch(new LoadVideoAction(this.movieId));
    this.store.dispatch(new LoadImageAction(this.movieId));
    this.store.dispatch(new LoadMovieByIdAction(this.movieId));
  }

}
