import { z } from '../../lib/registry';
export declare const serviceGroupSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodString;
    icon: z.ZodString;
    orderIndex: z.ZodNumber;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const serviceSchema: z.ZodObject<{
    id: z.ZodString;
    groupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>;
    isStandalone: z.ZodDefault<z.ZodBoolean>;
    orderIndex: z.ZodNumber;
    uptime30d: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
    machineSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const servicePortSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const dailyMetricSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    date: z.ZodString;
    uptimePercent: z.ZodNumber;
    incidentCount: z.ZodNumber;
    downtimeMinutes: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const incidentUpdateSchema: z.ZodObject<{
    id: z.ZodString;
    incidentId: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const incidentSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    incidentRef: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    startedAt: z.ZodDate;
    resolvedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        incidentId: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<{
            readonly INVESTIGATING: "INVESTIGATING";
            readonly IDENTIFIED: "IDENTIFIED";
            readonly MONITORING: "MONITORING";
            readonly RESOLVED: "RESOLVED";
        }>;
        createdAt: z.ZodDate;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const maintenanceSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduledStart: z.ZodDate;
    scheduledEnd: z.ZodDate;
    actualEnd: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const adminMachineSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodString;
    cpu: z.ZodString;
    ramTotal: z.ZodString;
    localIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    online: z.ZodBoolean;
    createdAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=infrastructure.schemas.d.ts.map