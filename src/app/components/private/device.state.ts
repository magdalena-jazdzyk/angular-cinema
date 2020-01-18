import {State, Action, StateContext} from '@ngxs/store';

export class DeviceStateModel {
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

}
