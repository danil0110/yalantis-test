require('dotenv').config();
const path = require('path');

const fastify = require('fastify')({ logger: true });
const helmet = require('fastify-helmet');

const registerRoutes = require('./routes/register.routes');
const profileRoutes = require('./routes/profile.routes');

fastify.register(helmet);
fastify.register(require('fastify-formbody'));
fastify.register(require('fastify-multipart'));
fastify.register(require('point-of-view'), {
    engine: {
        handlebars: require('handlebars'),
    },
    includeViewExtension: true,
    options: {
        partials: {
            head: '/src/views/partials/head.hbs',
            header: '/src/views/partials/header.hbs',
        },
    },
});
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '/public'),
    prefix: '/public/',
});

fastify.register(registerRoutes, { prefix: '/' });
fastify.register(profileRoutes, { prefix: '/profile' });

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000);
        fastify.log.info(`Server is listening to port ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
