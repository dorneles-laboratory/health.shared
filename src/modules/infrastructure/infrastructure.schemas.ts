import { z, registry } from '../../lib/registry';
import { IncidentStatus, IncidentSeverity } from '../incident/incident.enums';
import { MaintenanceStatus } from '../maintenance/maintenance.enums';
import { ServicePortProtocol } from '../infrastructure/infrastructure.enums';
import { ServiceStatus } from '../service/service.enums';

export const serviceGroupSchema = registry.register(
  'ServiceGroup',
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string().nullable().optional(),
    slug: z.string(),
    icon: z.string(),
    order_index: z.number().int(),
    created_at: z.date(),
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
    url: z.string().url().nullable().optional(),
    status: z.nativeEnum(ServiceStatus),
    is_standalone: z.boolean().default(false),
    order_index: z.number().int(),
    uptime_30d: z.number().min(0).max(100),
    avg_response_ms: z.number().min(0),
    machine_slug: z.string().nullable().optional(),
    created_at: z.date(),
  }),
);

export const servicePortSchema = registry.register(
  'ServicePort',
  z.object({
    id: z.string().uuid(),
    service_id: z.string().uuid(),
    port: z.number().int().positive(),
    protocol: z.nativeEnum(ServicePortProtocol),
    description: z.string().nullable().optional(),
    created_at: z.date(),
  }),
);

export const dailyMetricSchema = registry.register(
  'DailyMetric',
  z.object({
    id: z.string().uuid(),
    service_id: z.string().uuid(),
    date: z.string(),
    uptime_percent: z.number().min(0).max(100),
    incident_count: z.number().int().min(0),
    downtime_minutes: z.number().int().min(0),
    avg_response_ms: z.number().min(0),
    created_at: z.date(),
  }),
);

export const incidentUpdateSchema = registry.register(
  'IncidentUpdate',
  z.object({
    id: z.string().uuid(),
    incident_id: z.string().uuid(),
    message: z.string(),
    status: z.nativeEnum(IncidentStatus),
    created_at: z.date(),
  }),
);

export const incidentSchema = registry.register(
  'Incident',
  z.object({
    id: z.string().uuid(),
    service_id: z.string().uuid(),
    incident_ref: z.string().nullable().optional(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(IncidentStatus),
    severity: z.nativeEnum(IncidentSeverity),
    started_at: z.date(),
    resolved_at: z.date().nullable().optional(),
    duration_minutes: z.number().int().min(0).nullable().optional(),
    created_at: z.date(),
    updates: z.array(incidentUpdateSchema).optional(),
  }),
);

export const maintenanceSchema = registry.register(
  'Maintenance',
  z.object({
    id: z.string().uuid(),
    service_id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduled_start: z.date(),
    scheduled_end: z.date(),
    actual_end: z.date().nullable().optional(),
    created_at: z.date(),
  }),
);

export const adminMachineSchema = registry.register(
  'AdminMachine',
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    os: z.string(),
    cpu: z.string(),
    ram_total: z.string(),
    local_ip: z.string().nullable().optional(),
    public_ip: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    online: z.boolean(),
    created_at: z.date(),
  }),
);
