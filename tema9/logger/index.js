// npm winston
const winston = require('winston');

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

logger.info("Información")
logger.debug("Debug")
logger.warn("Advertencia")
logger.error("Error")

// NIVELES: estándar RFC5424
// error: 0,
// warn: 1,
// info: 2,
// http: 3,
// verbose: 4,
// debug: 5,
// silly: 6

// Exportar el objeto logger para que esté disponible para todo el proyecto
module.exports = logger 