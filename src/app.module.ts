import { MiddlewareConsumer, Module , NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SongsModule } from './songs/songs.module.js';
import { connection } from './connection.js';



@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService , { provide : 'CONNECTION' , useValue : connection}],
})
export class AppModule {

}
