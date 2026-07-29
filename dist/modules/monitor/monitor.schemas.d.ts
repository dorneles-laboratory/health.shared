import { z } from '../../lib/registry';
export declare const monitorResultSchema: z.ZodObject<{
    serviceId: z.ZodString;
    status: z.ZodEnum<{
        readonly INVESTIGATING: "INVESTIGATING";
        readonly IDENTIFIED: "IDENTIFIED";
        readonly MONITORING: "MONITORING";
        readonly RESOLVED: "RESOLVED";
    }>;
    latency: z.ZodNumber;
}, z.core.$strip>;
export declare const processResultsSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        serviceId: z.ZodString;
        status: z.ZodEnum<{
            readonly INVESTIGATING: "INVESTIGATING";
            readonly IDENTIFIED: "IDENTIFIED";
            readonly MONITORING: "MONITORING";
            readonly RESOLVED: "RESOLVED";
        }>;
        latency: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const monitorTargetSchema: z.ZodObject<{
    id: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export declare const monitorTargetsResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=monitor.schemas.d.ts.map