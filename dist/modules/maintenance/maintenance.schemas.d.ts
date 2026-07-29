import { z } from '../../lib/registry';
export declare const createMaintenanceSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>;
    scheduledStart: z.ZodCoercedDate<unknown>;
    scheduledEnd: z.ZodCoercedDate<unknown>;
    actualEnd: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export declare const updateMaintenanceSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    serviceId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>>;
    scheduledStart: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    scheduledEnd: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    actualEnd: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
}, z.core.$strip>;
export declare const maintenanceResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    serviceId: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduledStart: z.ZodDate;
    scheduledEnd: z.ZodDate;
    actualEnd: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const maintenancePublicResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduledStart: z.ZodDate;
    scheduledEnd: z.ZodDate;
    service: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        slug: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const maintenanceIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=maintenance.schemas.d.ts.map