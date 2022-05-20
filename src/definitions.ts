export interface DeviceModelPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getModelInfo(): Promise<{ model: string }>;
}

export const { DeviceModel }: { DeviceModel: DeviceModelPlugin } = Plugin as any;