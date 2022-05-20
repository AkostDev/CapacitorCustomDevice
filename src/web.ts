import { WebPlugin } from '@capacitor/core';

import type { DeviceModelPlugin } from './definitions';

export class DeviceModelWeb extends WebPlugin implements DeviceModelPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
