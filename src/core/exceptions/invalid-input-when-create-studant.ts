import { BaseException } from './base-exception.exception';

export class InvalidInputWhenCreateStudent extends BaseException {
  constructor(message: string, httpCode: number) {
    super(message, httpCode);
  }
}
