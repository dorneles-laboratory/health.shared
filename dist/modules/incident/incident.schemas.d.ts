import { z } from '../../lib/registry';
export declare const createIncidentSchema: z.ZodObject<{
    title: z.ZodString;
    incident_ref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    service_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    status: z.ZodDefault<z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>>;
    started_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    resolved_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    duration_minutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateIncidentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    incident_ref: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    service_id: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    severity: z.ZodOptional<z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>>>;
    started_at: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    resolved_at: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
    duration_minutes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
export declare const incidentResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    incident_ref: z.ZodNullable<z.ZodString>;
    service_id: z.ZodNullable<z.ZodString>;
    severity: z.ZodEnum<{
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
    }>;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    started_at: z.ZodDate;
    resolved_at: z.ZodNullable<z.ZodDate>;
    duration_minutes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const incidentIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=incident.schemas.d.ts.map