import { Controller, Get, Query } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get()
  async generateQrCode(@Query('data') data: string) {
    const qrCodeDataURL = await this.qrcodeService.generateQrCode(data);
    console.log(qrCodeDataURL);
    
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
}
