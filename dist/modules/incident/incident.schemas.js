import { z, registry } from '../../lib/registry';
import { IncidentStatus, IncidentSeverity } from './incident.enums';
export const createIncidentSchema = registry.register('CreateIncidentRequest', z.object({
    title: z
        .string({
        error: ({ input }) => input === undefined
            ? 'O título do incidente é obrigatório.'
            : 'O título deve ser um texto.',
    })
        .min(3, { message: 'Título muito curto.' })
        .max(150, { message: 'Título muito longo.' })
        .trim()
        .openapi({
        description: 'Título curto descrevendo o problema',
        example: 'Falha de comunicação com o Gateway de Pagamento',
    }),
    incidentRef: z.string().trim().nullable().optional().openapi({
        description: 'Código de referência externa (ex: INC-2026-0013)',
    }),
    serviceId: z
        .string()
        .uuid({ message: 'O ID do serviço deve ser um UUID válido.' })
        .nullable()
        .optional()
        .openapi({
        description: 'UUID do serviço afetado. Se nulo, afeta a infraestrutura global.',
    }),
    severity: z.nativeEnum(IncidentSeverity).openapi({
        description: 'Nível de impacto do incidente',
        example: IncidentSeverity.MAJOR_OUTAGE,
    }),
    status: z
        .nativeEnum(IncidentStatus)
        .default(IncidentStatus.INVESTIGATING)
        .openapi({
        description: 'Fase atual de tratamento do incidente',
        example: IncidentStatus.INVESTIGATING,
    }),
    startedAt: z.coerce.date().optional().openapi({
        description: 'Data e hora exata em que o incidente começou',
    }),
    resolvedAt: z.coerce.date().nullable().optional().openapi({
        description: 'Data e hora em que o incidente foi resolvido',
    }),
    durationMinutes: z.number().int().nullable().optional().openapi({
        description: 'Duração total do incidente em minutos',
    }),
}));
export const updateIncidentSchema = registry.register('UpdateIncidentRequest', createIncidentSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido para atualização.',
}));
export const incidentResponseSchema = registry.register('IncidentResponse', z.object({
    id: z.string().uuid(),
    title: z.string(),
    incidentRef: z.string().nullable(),
    serviceId: z.string().uuid().nullable(),
    severity: z.nativeEnum(IncidentSeverity),
    status: z.nativeEnum(IncidentStatus),
    startedAt: z.date(),
    resolvedAt: z.date().nullable(),
    durationMinutes: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}));
export const incidentIdSchema = z.object({
    id: z
        .string()
        .uuid({
        error: ({ input }) => input === undefined
            ? 'O ID é obrigatório.'
            : 'O ID do incidente deve ser um UUID válido.',
    })
        .openapi({
        param: {
            name: 'id',
            in: 'path',
        },
        description: 'UUID Identificador exclusivo do incidente',
    }),
});
//# sourceMappingURL=incident.schemas.js.map