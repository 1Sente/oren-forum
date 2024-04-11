import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode'
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateCodeDto } from './dto/generateCode.dto';


@Injectable()
export class QrcodeService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
    async generateQrCode(data: GenerateCodeDto): Promise<string> {
        try {

            const qrCodeUrl = await qrcode.toDataURL(data.url)
            
            await this.prismaService.qrCode.create({
                data: {
                    qrcode: qrCodeUrl,
                    userId: data.id
                }
            })
            return qrCodeUrl
        } catch (error) {
            throw new Error('Failed to generate QR code.');
        }
    }
}

