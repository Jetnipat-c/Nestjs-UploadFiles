import { Module } from '@nestjs/common';
import { ImagesModule } from './modules/images/images.module';
import modules from './modules';
@Module({
  imports: [...modules, ImagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
