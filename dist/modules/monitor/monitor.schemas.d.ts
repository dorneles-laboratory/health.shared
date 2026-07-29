import { z } from '../../lib/registry';
export declare const monitorResultSchema: z.ZodObject<{
    serviceId: z.ZodString;
    status: z.ZodEnum<{
        readonly OPERATIONAL: "OPERATIONAL";
        readonly DEGRADED: "DEGRADED";
        readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
        readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
        readonly MAINTENANCE: "MAINTENANCE";
    }>;
    latency: z.ZodNumber;
}, z.core.$strip>;
export declare const processResultsSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        serviceId: z.ZodString;
        status: z.ZodEnum<{
            readonly OPERATIONAL: "OPERATIONAL";
            readonly DEGRADED: "DEGRADED";
            readonly PARTIAL_OUTAGE: "PARTIAL_OUTAGE";
            readonly MAJOR_OUTAGE: "MAJOR_OUTAGE";
            readonly MAINTENANCE: "MAINTENANCE";
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