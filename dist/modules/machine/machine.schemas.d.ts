import { z } from '../../lib/registry';
export declare const createMachineSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cpu: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ramTotal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    localIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicIp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    online: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateMachineSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    os: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cpu: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    ramTotal: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    localIp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    publicIp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    online: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const machineResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    os: z.ZodNullable<z.ZodString>;
    cpu: z.ZodNullable<z.ZodString>;
    ramTotal: z.ZodNullable<z.ZodString>;
    localIp: z.ZodNullable<z.ZodString>;
    publicIp: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    online: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const machineIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=machine.schemas.d.ts.map