import { z, registry } from '../../lib/registry';
import { ServicePortProtocol } from './service-port.enums';
export const createServicePortSchema = registry.register('CreateServicePortRequest', z.object({
    serviceId: z
        .string({ message: 'O ID do serviço é obrigatório.' })
        .uuid({ message: 'O ID do serviço deve ser um UUID válido.' })
        .openapi({
        description: 'UUID do serviço dono desta porta',
    }),
    port: z
        .number({ message: 'O número da porta é obrigatório.' })
        .int()
        .min(1)
        .max(65535)
        .openapi({
        description: 'Número da porta (1 a 65535)',
        example: 443,
    }),
    protocol: z
        .nativeEnum(ServicePortProtocol, {
        message: 'O protocolo é obrigatório.',
    })
        .openapi({
        description: 'Protocolo de comunicação',
        example: 'HTTPS',
    }),
    description: z
        .string()
        .max(255, { message: 'Descrição muito longa.' })
        .trim()
        .nullable()
        .optional()
        .openapi({
        description: 'Descrição ou uso da porta',
        example: 'Porta principal da API',
    }),
}));
export const updateServicePortSchema = registry.register('UpdateServicePortRequest', createServicePortSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido para atualização.',
}));
export const servicePortResponseSchema = registry.register('ServicePortResponse', z.object({
    id: z.string().uuid(),
    serviceId: z.string().uuid(),
    port: z.number().int(),
    protocol: z.nativeEnum(ServicePortProtocol),
    description: z.string().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
}));
export const servicePortIdSchema = z.object({
    id: z
        .string()
        .uuid({
        error: ({ input }) => input === undefined
            ? 'O ID é obrigatório.'
            : 'O ID da porta deve ser um UUID válido.',
    })
        .openapi({
        param: {
            name: 'id',
            in: 'path',
        },
        description: 'UUID Identificador exclusivo da porta',
    }),
});
//# sourceMappingURL=service-port.schemas.js.map