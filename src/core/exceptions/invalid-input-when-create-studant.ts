import { BaseException } from './base-exception.exception';

export class InvalidInputWhenCreateAccount extends BaseException {
  constructor(message: string, httpCode: number) {
    super(message, httpCode);
  }
}
