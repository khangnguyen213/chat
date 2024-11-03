import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminChatModule } from './modules/admin-chat/admin-chat.module';

@Module({
  imports: [AdminChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
