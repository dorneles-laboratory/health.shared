import { z } from '../../lib/registry';
export declare const createIncidentSchema: z.ZodObject<{
    title: z.ZodString;
    incidentRef: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    startedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    resolvedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    durationMinutes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateIncidentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    incidentRef: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
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
    startedAt: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    resolvedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
    durationMinutes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
export declare const incidentResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    incidentRef: z.ZodNullable<z.ZodString>;
    serviceId: z.ZodNullable<z.ZodString>;
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
    startedAt: z.ZodDate;
    resolvedAt: z.ZodNullable<z.ZodDate>;
    durationMinutes: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const incidentPublicResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
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
    service: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        slug: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const incidentIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=incident.schemas.d.ts.map