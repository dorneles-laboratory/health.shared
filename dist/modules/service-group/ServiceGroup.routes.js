import { Router } from 'express';
import { registry, z, createServiceGroupSchema, updateServiceGroupSchema, serviceGroupIdSchema, serviceGroupResponseSchema, rfc7807ErrorSchema, } from '@lib/shared';
import { ServiceGroupController } from './service-group.controller.js';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated.js';
const router = Router();
const serviceGroupController = new ServiceGroupController();
// --- Registro das Rotas no OpenAPI Registry ---
// Rota: Criar Grupo de Serviço
registry.registerPath({
    method: 'post',
    path: '/admin/service-groups',
    summary: 'Cria um novo grupo de serviços',
    tags: ['ServiceGroup'],
    security: [{ cookieAuth: [] }],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: createServiceGroupSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Grupo criado com sucesso',
            content: { 'application/json': { schema: serviceGroupResponseSchema } },
        },
        400: {
            description: 'Dados inválidos ou erro de validação',
            content: { 'application/json': { schema: rfc7807ErrorSchema } },
        },
    },
});
// Rota: Listar Todos os Grupos de Serviço
registry.registerPath({
    method: 'get',
    path: '/admin/service-groups',
    summary: 'Lista todos os grupos de serviços (sem paginação)',
    security: [{ cookieAuth: [] }],
    tags: ['ServiceGroup'],
    responses: {
        200: {
            description: 'Lista de grupos retornada com sucesso',
            content: {
                'application/json': { schema: z.array(serviceGroupResponseSchema) },
            },
        },
        401: { description: 'Não autorizado' },
    },
});
// Rota: Buscar por ID
registry.registerPath({
    method: 'get',
    path: '/admin/service-groups/{id}',
    summary: 'Busca um grupo de serviços pelo ID',
    security: [{ cookieAuth: [] }],
    tags: ['ServiceGroup'],
    request: { params: serviceGroupIdSchema },
    responses: {
        200: {
            description: 'Grupo encontrado',
            content: { 'application/json': { schema: serviceGroupResponseSchema } },
        },
        401: { description: 'Não autorizado' },
        404: {
            description: 'Grupo não encontrado',
            content: { 'application/json': { schema: rfc7807ErrorSchema } },
        },
    },
});
// Rota: Atualizar Grupo de Serviço
registry.registerPath({
    method: 'put',
    path: '/admin/service-groups/{id}',
    summary: 'Atualiza dados de um grupo de serviços existente',
    security: [{ cookieAuth: [] }],
    tags: ['ServiceGroup'],
    request: {
        params: serviceGroupIdSchema,
        body: {
            content: {
                'application/json': {
                    schema: updateServiceGroupSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Grupo atualizado com sucesso',
            content: { 'application/json': { schema: serviceGroupResponseSchema } },
        },
        400: {
            description: 'Dados fornecidos inválidos',
            content: { 'application/json': { schema: rfc7807ErrorSchema } },
        },
        401: { description: 'Não autorizado' },
        404: {
            description: 'Grupo não encontrado',
            content: { 'application/json': { schema: rfc7807ErrorSchema } },
        },
    },
});
// Rota: Deletar Grupo de Serviço
registry.registerPath({
    method: 'delete',
    path: '/admin/service-groups/{id}',
    summary: 'Remove um grupo de serviços',
    security: [{ cookieAuth: [] }],
    tags: ['ServiceGroup'],
    request: { params: serviceGroupIdSchema },
    responses: {
        204: {
            description: 'Grupo removido com sucesso (sem retorno de conteúdo)',
        },
        401: { description: 'Não autorizado' },
        404: {
            description: 'Grupo não encontrado',
            content: { 'application/json': { schema: rfc7807ErrorSchema } },
        },
    },
});
// --- Execução Física das Rotas do Express ---
router.use(ensureAuthenticated);
router.post('/', serviceGroupController.create);
router.get('/', serviceGroupController.findAll);
router.get('/:id', serviceGroupController.findById);
router.put('/:id', serviceGroupController.update); // Usando PUT conforme o hook do frontend
router.delete('/:id', serviceGroupController.delete);
export default router;
//# sourceMappingURL=ServiceGroup.routes.js.map