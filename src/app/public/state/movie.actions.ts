export class LoadMovieAction{
  static readonly type = '[Movie] LoadMovie';

  constructor(public page: number, public size : number ) {
  }
}
