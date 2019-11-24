import {State, Action, StateContext} from '@ngxs/store';
import {TemplateControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';
import {patch} from '@ngxs/store/operators';
import {HttpClient} from '@angular/common/http';

export class DownloadTicketAction {
  static readonly type = '[ticket] downloadTicket';

  constructor(public repertoireId: number) {
  }
}

export class TicketStateModel {
  public pdfFile: string;
}

@State<TicketStateModel>({
  name: 'ticket',
  defaults: {
    pdfFile: null
  }
})
export class TicketState {
  constructor(public httpClient: HttpClient) {
  }

  @Action(DownloadTicketAction)
  add(ctx: StateContext<TicketStateModel>, {repertoireId}: DownloadTicketAction) {
    return this.httpClient.get('http://localhost:8080/templates/download/' + repertoireId, {responseType: 'blob'})
      .subscribe((blob: Blob) => {
        console.log(blob);
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', 'ticket.pdf');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          //html5 download not supported
        }
      });
  }
}
