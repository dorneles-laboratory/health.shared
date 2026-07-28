import { z } from '../../lib/registry';
export declare const createServicePortSchema: z.ZodObject<{
    serviceId: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const updateServicePortSchema: z.ZodObject<{
    serviceId: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    protocol: z.ZodOptional<z.ZodEnum<{
        readonly TCP: "TCP";
        readonly UDP: "UDP";
        readonly HTTP: "HTTP";
        readonly HTTPS: "HTTPS";
    }>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.core.$strip>;
export declare const servicePortResponseSchema: z.ZodObject<{
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
export declare const servicePortIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=service-port.schemas.d.ts.map