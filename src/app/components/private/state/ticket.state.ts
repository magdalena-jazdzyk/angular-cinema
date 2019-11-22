import {State, Action, StateContext} from '@ngxs/store';
import {TemplateControllerService} from '../../../../api/services';
import {tap} from 'rxjs/operators';
import {patch} from '@ngxs/store/operators';

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
  constructor(public templateControllerService: TemplateControllerService) {
  }

  @Action(DownloadTicketAction)
  add(ctx: StateContext<TicketStateModel>, {repertoireId}: DownloadTicketAction) {
    return this.templateControllerService.downloadFileUsingPOST(repertoireId).pipe(
      tap(value => {
        console.log('action');
        const newBlob = new Blob([(value)], {type: 'application/pdf'});
        //
        // // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // //         //   window.navigator.msSaveOrOpenBlob(newBlob);
        // //         //   return;
        // //         // }
        // //         // const downloadURL = URL.createObjectURL(newBlob);
        // //         // window.open(downloadURL);
        //
        const url = window.URL.createObjectURL(newBlob);
        window.open(url);

        ctx.patchState({
          pdfFile: value
        });
      })
    );
  }
}
