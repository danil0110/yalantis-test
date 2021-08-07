async function routes(fastify) {
    fastify.get('/', async (req, reply) => {
        reply.view('/src/views/layouts/register');
    });
}

module.exports = routes;
