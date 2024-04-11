import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { QrcodeModule } from 'src/qrcode/qrcode.module';

@Module({
  imports: [QrcodeModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
