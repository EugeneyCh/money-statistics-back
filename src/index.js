import { startServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

import { TEMP_UPLOAD_DIR } from './constants/index.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  startServer();
};

void bootstrap();
