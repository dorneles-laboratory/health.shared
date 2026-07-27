import { z } from '../../lib/registry';
export declare const createMaintenanceSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    service_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>;
    scheduled_start: z.ZodCoercedDate<unknown>;
    scheduled_end: z.ZodCoercedDate<unknown>;
    actual_end: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export declare const updateMaintenanceSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    service_id: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>>>;
    scheduled_start: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    scheduled_end: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    actual_end: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>>;
}, z.core.$strip>;
export declare const maintenanceResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    service_id: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly SCHEDULED: "SCHEDULED";
        readonly IN_PROGRESS: "IN_PROGRESS";
        readonly COMPLETED: "COMPLETED";
        readonly CANCELED: "CANCELED";
    }>;
    scheduled_start: z.ZodDate;
    scheduled_end: z.ZodDate;
    actual_end: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const maintenanceIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=maintenance.schemas.d.ts.map