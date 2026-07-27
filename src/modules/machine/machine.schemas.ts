import { z, registry } from '../../lib/registry';

export const createMachineSchema = registry.register(
  'CreateMachineRequest',
  z.object({
    name: z
      .string({
        error: ({ input }) =>
          input === undefined
            ? 'O nome da máquina é obrigatório.'
            : 'O nome da máquina deve ser um texto.',
      })
      .min(2, { message: 'Nome da máquina muito curto.' })
      .max(100, { message: 'Nome da máquina muito longo.' })
      .trim()
      .openapi({
        description: 'Nome de exibição da máquina',
        example: 'Server Prod 01',
      }),

    slug: z
      .string({
        error: ({ input }) =>
          input === undefined
            ? 'O slug é obrigatório.'
            : 'O slug deve ser um texto.',
      })
      .min(2)
      .max(100)
      .trim()
      .openapi({
        description: 'Identificador único amigável (URL-safe)',
        example: 'server-prod-01',
      }),

    os: z
      .string()
      .trim()
      .nullable()
      .optional()
      .openapi({ example: 'Ubuntu 24.04 LTS' }),
    cpu: z
      .string()
      .trim()
      .nullable()
      .optional()
      .openapi({ example: 'Intel Core i7-12700H' }),
    ramTotal: z
      .string()
      .trim()
      .nullable()
      .optional()
      .openapi({ example: '32 GB DDR5' }),
    localIp: z
      .string()
      .trim()
      .nullable()
      .optional()
      .openapi({ example: '192.168.0.10' }),
    publicIp: z
      .string()
      .trim()
      .nullable()
      .optional()
      .openapi({ example: '200.181.10.15' }),

    description: z
      .string()
      .max(1000, { message: 'Descrição muito longa.' })
      .trim()
      .nullable()
      .optional()
      .openapi({
        description: 'Descrição detalhada ou anotações sobre a máquina',
      }),

    online: z.boolean().default(false).openapi({
      description: 'Status atual da máquina (Online/Offline)',
      example: true,
    }),
  }),
);

export const updateMachineSchema = registry.register(
  'UpdateMachineRequest',
  createMachineSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido para atualização.',
  }),
);

// Schema de Resposta
export const machineResponseSchema = registry.register(
  'MachineResponse',
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
    os: z.string().nullable(),
    cpu: z.string().nullable(),
    ramTotal: z.string().nullable(),
    localIp: z.string().nullable(),
    publicIp: z.string().nullable(),
    description: z.string().nullable(),
    online: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
);

export const machineIdSchema = z.object({
  id: z
    .string()
    .uuid({
      error: ({ input }) =>
        input === undefined
          ? 'O ID é obrigatório.'
          : 'O ID da máquina deve ser um UUID válido.',
    })
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      description: 'UUID Identificador exclusivo da máquina',
    }),
});
