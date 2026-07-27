import { z, registry } from '../../lib/registry';
import { ServiceStatus } from './service.enums';
export const createServiceSchema = registry.register('CreateServiceRequest', z.object({
    name: z
        .string({
        error: ({ input }) => input === undefined
            ? 'O nome do serviço é obrigatório.'
            : 'O nome do serviço deve ser um texto.',
    })
        .min(2, { message: 'Nome do serviço muito curto.' })
        .max(100, { message: 'Nome do serviço muito longo.' })
        .trim()
        .openapi({
        description: 'Nome de exibição do serviço',
        example: 'API de Pagamentos',
    }),
    slug: z
        .string({
        error: ({ input }) => input === undefined
            ? 'O slug é obrigatório.'
            : 'O slug deve ser um texto.',
    })
        .min(2)
        .max(100)
        .trim()
        .openapi({
        description: 'Identificador único amigável (URL-safe)',
        example: 'api-pagamentos',
    }),
    description: z
        .string()
        .max(1000, { message: 'Descrição muito longa.' })
        .trim()
        .nullable()
        .optional()
        .openapi({
        description: 'Descrição detalhada do serviço',
    }),
    status: z
        .nativeEnum(ServiceStatus)
        .default(ServiceStatus.OPERATIONAL)
        .openapi({
        description: 'Status atual de operação do serviço',
        example: 'OPERATIONAL',
    }),
    groupId: z
        .string()
        .uuid({ message: 'O ID do grupo deve ser um UUID válido.' })
        .nullable()
        .optional()
        .openapi({
        description: 'UUID do grupo de serviços ao qual este serviço pertence',
    }),
}));
export const updateServiceSchema = registry.register('UpdateServiceRequest', createServiceSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido para atualização.',
}));
// Schema de Resposta
export const serviceResponseSchema = registry.register('ServiceResponse', z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    status: z.nativeEnum(ServiceStatus),
    groupId: z.string().uuid().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
}));
export const serviceIdSchema = z.object({
    id: z
        .string()
        .uuid({
        error: ({ input }) => input === undefined
            ? 'O ID é obrigatório.'
            : 'O ID do serviço deve ser um UUID válido.',
    })
        .openapi({
        param: {
            name: 'id',
            in: 'path',
        },
        description: 'UUID Identificador exclusivo do serviço',
    }),
});
//# sourceMappingURL=service.schemas.js.map