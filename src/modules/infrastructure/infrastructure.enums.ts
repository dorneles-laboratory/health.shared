export const ServiceStatus = {
  OPERATIONAL: 'OPERATIONAL',
  DEGRADED: 'DEGRADED',
  PARTIAL_OUTAGE: 'PARTIAL_OUTAGE',
  MAJOR_OUTAGE: 'MAJOR_OUTAGE',
  MAINTENANCE: 'MAINTENANCE',
} as const;

export type EnumServiceStatus =
  (typeof ServiceStatus)[keyof typeof ServiceStatus];

export const IncidentStatus = {
  INVESTIGATING: 'INVESTIGATING',
  IDENTIFIED: 'IDENTIFIED',
  MONITORING: 'MONITORING',
  RESOLVED: 'RESOLVED',
} as const;

export type EnumIncidentStatus =
  (typeof IncidentStatus)[keyof typeof IncidentStatus];

export const IncidentSeverity = {
  DEGRADED: 'DEGRADED',
  PARTIAL_OUTAGE: 'PARTIAL_OUTAGE',
  MAJOR_OUTAGE: 'MAJOR_OUTAGE',
} as const;

export type EnumIncidentSeverity =
  (typeof IncidentSeverity)[keyof typeof IncidentSeverity];

export const MaintenanceStatus = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
} as const;

export type EnumMaintenanceStatus =
  (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

export const ServicePortProtocol = {
  TCP: 'TCP',
  UDP: 'UDP',
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
} as const;

export type EnumServicePortProtocol =
  (typeof ServicePortProtocol)[keyof typeof ServicePortProtocol];
