import mongoose from 'mongoose';
import config from '../config';

/**
 * Connect to the database
 *
 * @param  {Function} config
 */
export default function connectToDb() {
  const { name } = config.db;
  try {
    if (config.env === 'PRODUCTION') {
      mongoose.connect(config.db.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true

      });
    } else {
      // eslint-disable-next-line no-console
      console.log(`DB Connecting to ${name}`);
      mongoose.connect(`mongodb://127.0.0.1:27017/${name}`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true

      });
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(`Error connecting to db: ${e}`);
  }
}
