import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World ${process.env.NODE_ENV}! v1.3`;
  }
}
