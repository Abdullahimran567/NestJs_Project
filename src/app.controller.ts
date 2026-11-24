import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Connection } from './connection.js'; 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService , @Inject('CONNECTION') private readonly connection : Connection) {
    console.log(connection)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
