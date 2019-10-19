import { State, Action, StateContext } from '@ngxs/store';
//import { DeviceControllerService } from 'src/api/services';
import { tap } from 'rxjs/operators';
//import { Device, PageDevice } from 'src/api/models';

// export class DeviceListAction {
//   static readonly type: "DeviceListAction"
//   constructor(public page: number, public size: number) { }
// }

// export class DeviceSaveAction {
//   static readonly type: "DeviceSaveAction"
//   constructor(public device: Device) { }
// }

// export class DeviceDeleteAction {
//   static readonly type: "DeviceDeleteAction"
//   constructor(public id: number) { }
// }

export class DeviceStateModel {
 // public devices: PageDevice;
  public size: number;
  public page: number;
}

@State<DeviceStateModel>({
  name: 'device',
  defaults: {
    //devices: {},
    page: 0,
    size: 5
  }
})
export class DeviceState {
  // constructor(public deviceService: DeviceControllerService) { }

  // @Action(DeviceListAction)
  // list(ctx: StateContext<DeviceStateModel>, {page, size}: DeviceListAction) {
  //   return this.deviceService.listUsingGET({page, size}).pipe(
  //     tap(value => {
  //       ctx.patchState({
  //         devices: value,
  //         page: page,
  //         size: size
  //       })
  //     })
  //   )
  // }

  // @Action(DeviceSaveAction)
  // save(ctx: StateContext<DeviceStateModel>, device: DeviceSaveAction) {
  //   if (device.device) {
  //     if (device.device.category) {
  //       return this.deviceService.createUsingPOST(device.device).pipe(
  //         tap(value => {
  //           ctx.dispatch(new DeviceListAction(ctx.getState().page, ctx.getState().size))
  //         })
  //       )
  //     }
  //   }
  // }

  // @Action(DeviceDeleteAction)
  // delete(ctx: StateContext<DeviceStateModel>, id: DeviceDeleteAction) {
  //   if (id.id) {
  //     return this.deviceService.byIdUsingDELETE(id.id).pipe(
  //       tap(value => {
  //         ctx.dispatch(new DeviceListAction(ctx.getState().page, ctx.getState().size))
  //       })
  //     )
  //   }
  // }

}
