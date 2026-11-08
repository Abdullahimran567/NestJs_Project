import { Module , NestModule , MiddlewareConsumer} from '@nestjs/common';
import { SongsController } from './songs.controller.js';
import { SongsService } from './songs.service.js';
import { LoggerMiddleware } from '../common/middleware/logger.middleware.js';

@Module({
  controllers: [SongsController],
  providers: [SongsService]
})
export class SongsModule implements NestModule{ 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongsController)
  }
}
