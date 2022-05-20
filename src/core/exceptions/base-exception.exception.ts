import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';

export class BaseException implements ExceptionFilter {
  constructor(message: string, httpCode: number) {
    this.httpCode = httpCode;
    this.message = message;
  }
  catch(exception: any, host: ArgumentsHost) {
    throw new Error('Method not implemented.');
  }

  message: string;
  httpCode: number;
}
