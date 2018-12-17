import config, { nodeEnv, logStars } from './config';

console.log('config', config);      // default export object
console.log('nodeEnv', nodeEnv);    // example of a variable export
logStars('Testing ABC');            // example of a function export