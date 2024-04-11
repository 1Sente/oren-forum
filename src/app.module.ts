import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { RegisterModule } from './register/register.module';
import { EmailsModule } from './mailer/mailer.module';
import { RenderModule } from './render/render.module';

@Module({
  imports: [
    PrismaModule, QrcodeModule, RegisterModule, EmailsModule, RenderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
