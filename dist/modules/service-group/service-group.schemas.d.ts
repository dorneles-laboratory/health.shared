import { z } from '../../lib/registry';
export declare const createServiceGroupSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    orderIndex: z.ZodDefault<z.ZodNumber>;
    icon: z.ZodString;
}, z.core.$strip>;
export declare const updateServiceGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    orderIndex: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const serviceGroupResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    icon: z.ZodString;
    orderIndex: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const serviceGroupIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=service-group.schemas.d.ts.map