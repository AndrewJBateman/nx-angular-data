import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasModule } from './datas/datas.module';

@Module({
  imports: [DatasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
