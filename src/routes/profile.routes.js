async function routes(fastify) {
    fastify.post('/', async (req, reply) => {
        reply.view('/src/views/layouts/profile');
    });
}

module.exports = routes;
