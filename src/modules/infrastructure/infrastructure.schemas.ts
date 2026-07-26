import { z, registry } from '../../lib/registry';
import {
  ServiceStatus,
  IncidentStatus,
  MaintenanceStatus,
} from './infrastructure.enums';

export const serviceGroupSchema = registry.register(
  'ServiceGroup',
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string().nullable().optional(),
    icon: z.string(),
    order_index: z.number().int(),
  }),
);

export const serviceSchema = registry.register(
  'Service',
  z.object({
    id: z.string().uuid(),
    group_id: z.string().uuid().nullable().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    status: z.nativeEnum(ServiceStatus),
    is_standalone: z.boolean().default(false),
    order_index: z.number().int(),
    uptime_30d: z.number().min(0).max(100),
    avg_response_ms: z.number().min(0),
  }),
);

export const dailyMetricSchema = registry.register(
  'DailyMetric',
  z.object({
    id: z.string().uuid(),
    service_id: z.string().uuid(),
    date: z.string(), // YYYY-MM-DD
    uptime_percent: z.number().min(0).max(100),
    avg_response_ms: z.number().min(0),
    incident_count: z.number().int().min(0),
    downtime_minutes: z.number().int().min(0),
  }),
);

export const incidentSchema = registry.register(
  'Incident',
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(IncidentStatus),
    started_at: z.date(),
    resolved_at: z.date().nullable().optional(),
  }),
);

export const maintenanceSchema = registry.register(
  'Maintenance',
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduled_start: z.date(),
    scheduled_end: z.date(),
  }),
);
