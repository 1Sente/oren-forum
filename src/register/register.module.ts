import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { QrcodeModule } from 'src/qrcode/qrcode.module';
import { EmailsModule } from 'src/mailer/mailer.module';

@Module({
  imports: [QrcodeModule, EmailsModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
