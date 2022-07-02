const winston = require("winston")

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),   // Muestra los logs por pantalla
      new winston.transports.File({ filename: 'error.log', level: 'error' }), // Solo registra los logs con nivel error
      new winston.transports.File({ filename: 'combined.log' }),     // Crea un archivo con todos los logs
    ],
  });

  module.exports = logger;