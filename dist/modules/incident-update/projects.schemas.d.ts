import { z } from '../../lib/registry';
export declare const createProjectSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const updateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const projectResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly Draft: "DRAFT";
        readonly Active: "ACTIVE";
        readonly OnHold: "ON_HOLD";
        readonly Completed: "COMPLETED";
        readonly Canceled: "CANCELLED";
    }>;
    priority: z.ZodEnum<{
        readonly Low: "LOW";
        readonly Medium: "MEDIUM";
        readonly High: "HIGH";
        readonly Critical: "CRITICAL";
    }>;
    startDate: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const projectIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=projects.schemas.d.ts.map