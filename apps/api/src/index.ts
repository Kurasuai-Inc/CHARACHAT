import { buildServer } from './server.js';
import { loadConfig } from './config.js';

const config = loadConfig();
const app = await buildServer({ config });

try {
  await app.listen({ port: config.port, host: config.host });
  console.log(`CHARACHAT API listening on http://${config.host}:${config.port}`);
} catch (error) {
  app.log.error(error);
  process.exit(1);
}

