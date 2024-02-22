import * as chalk from 'chalk';
import * as PrettyError from 'pretty-error'; // it's really handy to make your life easier
import * as winston from 'winston';
import { Logger, LoggerOptions } from 'winston';

export class LoggerService {
  private readonly logger: Logger;
  private readonly prettyError = new PrettyError();
  public static loggerOptions: LoggerOptions = {
    transports: [
      new winston.transports.File({
        filename: 'app.dev.error.log',
        level: 'error',
      }),
      new winston.transports.File({
        filename: 'app.dev.warn.log',
        level: 'warn',
      }),
      new winston.transports.File({ filename: 'app.dev.log', level: 'info' }),
    ],
  };
  constructor(private context: string) {
    this.logger = (winston as any).createLogger(LoggerService.loggerOptions);
    this.prettyError.skipNodeFiles();
    this.prettyError.skipPackage('express', '@nestjs/common', '@nestjs/core');
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      );
    }
  }
  get Logger(): Logger {
    return this.logger;
  }
  static configGlobal(options?: LoggerOptions) {
    this.loggerOptions = options;
  }
  log(message: string): void {
    const currentDate = new Date();
    this.logger.info(message, {
      timestamp: currentDate.toISOString(),
      context: this.context,
    });
    this.formattedLog('info', message);
  }
  error(message: string, trace?: any): void {
    const currentDate = new Date();

    this.logger.error(`${message} -> (${trace || 'trace not provided !'})`, {
      timestamp: currentDate.toISOString(),
      context: this.context,
    });
    this.formattedLog('error', message, trace);
  }
  warn(message: string): void {
    const currentDate = new Date();
    this.logger.warn(message, {
      timestamp: currentDate.toISOString(),
      context: this.context,
    });
    this.formattedLog('warn', message);
  }
  overrideOptions(options: LoggerOptions) {
    this.logger.configure(options);
  }

  private formattedLog(
    level: string,
    message: string,
    error?: PrettyError.ParsedError,
  ): void {
    let result = '';
    const color = chalk;
    const currentDate = new Date();
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    switch (level) {
      case 'info':
        result = `[${color.blue('INFO')}] ${color.dim.yellow.bold.underline(
          time,
        )} [${color.green(this.context)}] ${message}`;
        break;
      case 'error':
        result = `[${color.red('ERR')}] ${color.dim.yellow.bold.underline(
          time,
        )} [${color.green(this.context)}] ${message}`;
        this.prettyError.render(error, true);
        break;
      case 'warn':
        result = `[${color.yellow('WARN')}] ${color.dim.yellow.bold.underline(
          time,
        )} [${color.green(this.context)}] ${message}`;
        break;
      default:
        break;
    }
    console.log(result);
  }
}
