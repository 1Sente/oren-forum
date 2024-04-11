import { BadRequestException, Injectable } from '@nestjs/common';
import { QrcodeService } from 'src/qrcode/qrcode.service';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailService } from 'src/mailer/mailer.service';

@Injectable()
export class RegisterService {
    constructor(
        private readonly qrcodeService: QrcodeService,
        private readonly prismaService: PrismaService,
        private readonly emailSeerevice: EmailService
    ) {}
    async register(body: RegisterDto): Promise<RegisterDto> {
        const existUser = await this.prismaService.user.findUnique({where: {email: body.email}})
        if(existUser) throw new BadRequestException('Такой пользователь уже зарегистрирован')
        const user = await this.prismaService.user.create({
            data: {
                city: body.city,
                district: body.district,
                email: body.email,
                fio: body.fio,
                organization: body.organization,
                phoneNumber: body.phoneNumber,
                post: body.post
            }
        })
        const qrcode = await this.qrcodeService.generateQrCode({url: `http://localhost:3000/render/profile/${user.id}`, id: user.id})
        await this.emailSeerevice.sendEmail({fio: body.fio, qrcode, email: body.email})
        return body
    }
}