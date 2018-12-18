const env = process.env;

// variable export example
export const nodeEnv = env.NODE_ENV || 'development';

// function export example
export const logStars = function(message) {
    console.info('**************************');
    console.info(message);
    console.info('**************************');
};

// default export object
export default {
    port: env.port || 8080,
    host: env.host || '0.0.0.0',
    get serverUrl() {
      return `http://${this.host}:${this.port}`;
    }

};