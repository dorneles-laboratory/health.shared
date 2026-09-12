import { z, registry } from '../../lib/registry';

export const telegramTestSchema = registry.register(
  'TelegramTestRequest',
  z.object({
    customMessage: z
      .string()
      .max(500, { message: 'Mensagem muito longa.' })
      .optional()
      .openapi({
        description: 'Mensagem personalizada opcional para o teste',
        example: 'Mensagem de teste disparada pelo painel administrativo',
      }),
    botToken: z.string().trim().optional().openapi({
      description: 'Token opcional do bot para testar antes de salvar',
    }),
    chatId: z.string().trim().optional().openapi({
      description: 'Chat ID opcional para testar antes de salvar',
    }),
  }),
);

export const telegramTestResponseSchema = registry.register(
  'TelegramTestResponse',
  z.object({
    success: z.boolean(),
    message: z.string(),
    chatId: z.string().optional(),
  }),
);

export const updateTelegramConfigSchema = registry.register(
  'UpdateTelegramConfigRequest',
  z.object({
    botToken: z.string().trim().nullable().optional().openapi({
      description:
        'Token de autenticação do Bot do Telegram (obtido no @BotFather)',
      example: '123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ',
    }),
    chatId: z.string().trim().nullable().optional().openapi({
      description: 'ID do Chat, Grupo ou Canal de destino no Telegram',
      example: '-1001234567890',
    }),
    enabled: z.boolean().default(false).openapi({
      description:
        'Habilitar ou desabilitar o envio automático de alertas via Telegram',
      example: true,
    }),
    alertsOnMachineHighLoad: z.boolean().default(true).openapi({
      description:
        'Enviar alerta quando máquina estiver com alta carga (CPU/RAM/Disco)',
      example: true,
    }),
    alertsOnServiceDown: z.boolean().default(true).openapi({
      description: 'Enviar alerta quando um serviço monitorado cair ou falhar',
      example: true,
    }),
    cpuThreshold: z.number().min(10).max(100).default(85).openapi({
      description: 'Limite percentual de CPU para disparo de alerta (10-100%)',
      example: 85,
    }),
    ramThreshold: z.number().min(10).max(100).default(85).openapi({
      description:
        'Limite percentual de Memória RAM para disparo de alerta (10-100%)',
      example: 85,
    }),
    diskThreshold: z.number().min(10).max(100).default(90).openapi({
      description:
        'Limite percentual de Disco para disparo de alerta (10-100%)',
      example: 90,
    }),
  }),
);

export const telegramConfigResponseSchema = registry.register(
  'TelegramConfigResponse',
  z.object({
    id: z.string().uuid().optional(),
    botToken: z.string().nullable().optional(),
    chatId: z.string().nullable().optional(),
    enabled: z.boolean(),
    alertsOnMachineHighLoad: z.boolean(),
    alertsOnServiceDown: z.boolean(),
    cpuThreshold: z.number(),
    ramThreshold: z.number(),
    diskThreshold: z.number(),
    updatedAt: z.date().optional(),
  }),
);
