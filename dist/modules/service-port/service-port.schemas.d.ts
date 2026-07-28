import { z } from '../../lib/registry';
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
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=service-port.schemas.d.ts.map