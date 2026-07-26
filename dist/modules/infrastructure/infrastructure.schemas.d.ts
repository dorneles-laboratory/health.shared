import { z } from '../../lib/registry';
export declare const serviceGroupSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodString;
    icon: z.ZodString;
    order_index: z.ZodNumber;
    created_at: z.ZodDate;
}, z.core.$strip>;
export declare const serviceSchema: z.ZodObject<{
    id: z.ZodString;
    group_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "operational";
        readonly DEGRADED: "degraded";
        readonly PARTIAL_OUTAGE: "partial_outage";
        readonly MAJOR_OUTAGE: "major_outage";
        readonly MAINTENANCE: "maintenance";
    }>;
    is_standalone: z.ZodDefault<z.ZodBoolean>;
    order_index: z.ZodNumber;
    uptime_30d: z.ZodNumber;
    avg_response_ms: z.ZodNumber;
    created_at: z.ZodDate;
}, z.core.$strip>;
export declare const dailyMetricSchema: z.ZodObject<{
    id: z.ZodString;
    service_id: z.ZodString;
    date: z.ZodString;
    uptime_percent: z.ZodNumber;
    incident_count: z.ZodNumber;
    downtime_minutes: z.ZodNumber;
    avg_response_ms: z.ZodNumber;
    created_at: z.ZodDate;
}, z.core.$strip>;
export declare const incidentUpdateSchema: z.ZodObject<{
    id: z.ZodString;
    incident_id: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "investigating";
        readonly IDENTIFIED: "identified";
        readonly MONITORING: "monitoring";
        readonly RESOLVED: "resolved";
    }>;
    created_at: z.ZodDate;
}, z.core.$strip>;
export declare const incidentSchema: z.ZodObject<{
    id: z.ZodString;
    service_id: z.ZodString;
    incident_ref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "investigating";
        readonly IDENTIFIED: "identified";
        readonly MONITORING: "monitoring";
        readonly RESOLVED: "resolved";
    }>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "degraded";
        readonly PARTIAL_OUTAGE: "partial_outage";
        readonly MAJOR_OUTAGE: "major_outage";
    }>;
    started_at: z.ZodDate;
    resolved_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    duration_minutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    created_at: z.ZodDate;
    updates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        incident_id: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<{
            readonly INVESTIGATING: "investigating";
            readonly IDENTIFIED: "identified";
            readonly MONITORING: "monitoring";
            readonly RESOLVED: "resolved";
        }>;
        created_at: z.ZodDate;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const maintenanceSchema: z.ZodObject<{
    id: z.ZodString;
    service_id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        readonly SCHEDULED: "scheduled";
        readonly IN_PROGRESS: "in_progress";
        readonly COMPLETED: "completed";
        readonly CANCELED: "canceled";
    }>;
    scheduled_start: z.ZodDate;
    scheduled_end: z.ZodDate;
    actual_end: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    created_at: z.ZodDate;
}, z.core.$strip>;
export declare const adminMachineSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodString;
    cpu: z.ZodString;
    ram_total: z.ZodString;
    local_ip: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    public_ip: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    online: z.ZodBoolean;
    created_at: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=infrastructure.schemas.d.ts.map