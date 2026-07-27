export const ServicePortProtocol = {
  TCP: 'TCP',
  UDP: 'UDP',
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
} as const;

export type EnumServicePortProtocol =
  (typeof ServicePortProtocol)[keyof typeof ServicePortProtocol];
