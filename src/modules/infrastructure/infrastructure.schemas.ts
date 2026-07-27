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
    orderIndex: z.number().int(),
    createdAt: z.date(),
  }),
);

export const serviceSchema = registry.register(
  'Service',
  z.object({
    id: z.string().uuid(),
    groupId: z.string().uuid().nullable().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    url: z.string().url().nullable().optional(),
    status: z.nativeEnum(ServiceStatus),
    isStandalone: z.boolean().default(false),
    orderIndex: z.number().int(),
    uptime30d: z.number().min(0).max(100),
    avgResponseMs: z.number().min(0),
    machineSlug: z.string().nullable().optional(),
    createdAt: z.date(),
  }),
);

export const servicePortSchema = registry.register(
  'ServicePort',
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    port: z.number().int().positive(),
    protocol: z.nativeEnum(ServicePortProtocol),
    description: z.string().nullable().optional(),
    createdAt: z.date(),
  }),
);

export const dailyMetricSchema = registry.register(
  'DailyMetric',
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    date: z.string(),
    uptimePercent: z.number().min(0).max(100),
    incidentCount: z.number().int().min(0),
    downtimeMinutes: z.number().int().min(0),
    avgResponseMs: z.number().min(0),
    createdAt: z.date(),
  }),
);

export const incidentUpdateSchema = registry.register(
  'IncidentUpdate',
  z.object({
    id: z.string().uuid(),
    incidentId: z.string().uuid(),
    message: z.string(),
    status: z.nativeEnum(IncidentStatus),
    createdAt: z.date(),
  }),
);

export const incidentSchema = registry.register(
  'Incident',
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    incidentRef: z.string().nullable().optional(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(IncidentStatus),
    severity: z.nativeEnum(IncidentSeverity),
    startedAt: z.date(),
    resolvedAt: z.date().nullable().optional(),
    durationMinutes: z.number().int().min(0).nullable().optional(),
    createdAt: z.date(),
    updates: z.array(incidentUpdateSchema).optional(),
  }),
);

export const maintenanceSchema = registry.register(
  'Maintenance',
  z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduledStart: z.date(),
    scheduledEnd: z.date(),
    actualEnd: z.date().nullable().optional(),
    createdAt: z.date(),
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
    ramTotal: z.string(),
    localIp: z.string().nullable().optional(),
    publicIp: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    online: z.boolean(),
    createdAt: z.date(),
  }),
);
