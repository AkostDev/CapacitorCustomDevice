export interface DeviceModelPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
