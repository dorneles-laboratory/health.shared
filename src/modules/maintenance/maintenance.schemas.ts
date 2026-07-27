import { z, registry } from '../../lib/registry';
import { MaintenanceStatus } from './maintenance.enums';

export const createMaintenanceSchema = registry.register(
  'CreateMaintenanceRequest',
  z.object({
    title: z
      .string({
        error: ({ input }) =>
          input === undefined
            ? 'O título da manutenção é obrigatório.'
            : 'O título deve ser um texto.',
      })
      .min(3, { message: 'Título muito curto.' })
      .max(150, { message: 'Título muito longo.' })
      .trim()
      .openapi({
        description: 'Título ou resumo da manutenção',
        example: 'Atualização do banco de dados principal',
      }),

    description: z
      .string()
      .max(2000, { message: 'Descrição muito longa.' })
      .trim()
      .nullable()
      .optional()
      .openapi({
        description: 'Detalhes da janela de manutenção',
      }),

    service_id: z
      .string()
      .uuid({ message: 'O ID do serviço deve ser um UUID válido.' })
      .nullable()
      .optional()
      .openapi({
        description:
          'UUID do serviço afetado. Nulo representa manutenção global.',
      }),

    status: z
      .nativeEnum(MaintenanceStatus)
      .default(MaintenanceStatus.SCHEDULED)
      .openapi({
        description: 'Status atual da manutenção',
        example: 'SCHEDULED',
      }),

    scheduled_start: z.coerce
      .date({
        message: 'A data/hora de início programada é obrigatória.',
      })
      .openapi({
        description: 'Início programado da manutenção',
      }),

    scheduled_end: z.coerce
      .date({
        message: 'A data/hora de término programada é obrigatória.',
      })
      .openapi({
        description: 'Fim programado da manutenção',
      }),

    actual_end: z.coerce.date().nullable().optional().openapi({
      description: 'Término real da manutenção (preenchido ao concluir)',
    }),
  }),
);

export const updateMaintenanceSchema = registry.register(
  'UpdateMaintenanceRequest',
  createMaintenanceSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
      message: 'Pelo menos um campo deve ser fornecido para atualização.',
    }),
);

// Schema de Resposta
export const maintenanceResponseSchema = registry.register(
  'MaintenanceResponse',
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string().nullable(),
    service_id: z.string().uuid().nullable(),
    status: z.nativeEnum(MaintenanceStatus),
    scheduled_start: z.date(),
    scheduled_end: z.date(),
    actual_end: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
);

export const maintenanceIdSchema = z.object({
  id: z
    .string()
    .uuid({
      error: ({ input }) =>
        input === undefined
          ? 'O ID é obrigatório.'
          : 'O ID da manutenção deve ser um UUID válido.',
    })
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      description: 'UUID Identificador exclusivo da manutenção',
    }),
});
