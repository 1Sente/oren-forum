import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QrcodeService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
    async generateQrCode(data: string): Promise<string> {
        try {
            const qrCodeDataURL = await qrcode.toDataURL(data);
            await this.prismaService.qrCode.create({
                data: {
                    qrcode: qrCodeDataURL
                }
            })
            return qrCodeDataURL;
        } catch (error) {
            throw new Error('Failed to generate QR code.');
        }
    }
}
