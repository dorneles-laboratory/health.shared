import { z } from '../../lib/registry';
export declare const createDailyMetricSchema: z.ZodObject<{
    serviceId: z.ZodString;
    date: z.ZodCoercedDate<unknown>;
    uptimePercent: z.ZodNumber;
    incidentCount: z.ZodDefault<z.ZodNumber>;
    downtimeMinutes: z.ZodDefault<z.ZodNumber>;
    avgResponseMs: z.ZodNumber;
}, z.core.$strip>;
export declare const updateDailyMetricSchema: z.ZodObject<{
    serviceId: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    uptimePercent: z.ZodOptional<z.ZodNumber>;
    incidentCount: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    downtimeMinutes: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    avgResponseMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const dailyMetricResponseSchema: z.ZodObject<{
    id: z.ZodString;
    serviceId: z.ZodString;
    date: z.ZodDate;
    uptimePercent: z.ZodNumber;
    incidentCount: z.ZodNumber;
    downtimeMinutes: z.ZodNumber;
    avgResponseMs: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const dailyMetricIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=daily-metric.schemas.d.ts.map