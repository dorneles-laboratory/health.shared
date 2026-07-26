export const ServiceStatus = {
  OPERATIONAL: 'operational',
  DEGRADED: 'degraded',
  PARTIAL_OUTAGE: 'partial_outage',
  MAJOR_OUTAGE: 'major_outage',
  MAINTENANCE: 'maintenance',
} as const;

export type EnumServiceStatus =
  (typeof ServiceStatus)[keyof typeof ServiceStatus];

export const IncidentStatus = {
  INVESTIGATING: 'investigating',
  IDENTIFIED: 'identified',
  MONITORING: 'monitoring',
  RESOLVED: 'resolved',
} as const;

export type EnumIncidentStatus =
  (typeof IncidentStatus)[keyof typeof IncidentStatus];

export const IncidentSeverity = {
  DEGRADED: 'degraded',
  PARTIAL_OUTAGE: 'partial_outage',
  MAJOR_OUTAGE: 'major_outage',
} as const;

export type EnumIncidentSeverity =
  (typeof IncidentSeverity)[keyof typeof IncidentSeverity];

export const MaintenanceStatus = {
  SCHEDULED: 'scheduled',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELED: 'canceled',
} as const;

export type EnumMaintenanceStatus =
  (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];
