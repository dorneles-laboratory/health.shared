import { z } from '../../lib/registry';
import {
  serviceGroupSchema,
  serviceSchema,
  servicePortSchema,
  dailyMetricSchema,
  incidentSchema,
  incidentUpdateSchema,
  maintenanceSchema,
  adminMachineSchema,
} from './infrastructure.schemas';

export type ServiceGroup = z.infer<typeof serviceGroupSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type ServicePort = z.infer<typeof servicePortSchema>;
export type DailyMetric = z.infer<typeof dailyMetricSchema>;
export type IncidentUpdate = z.infer<typeof incidentUpdateSchema>;
export type Incident = z.infer<typeof incidentSchema>;
export type Maintenance = z.infer<typeof maintenanceSchema>;
export type AdminMachine = z.infer<typeof adminMachineSchema>;
