import { Injectable } from '@nestjs/common';
import { QrcodeService } from 'src/qrcode/qrcode.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
    constructor(
        private readonly qrcodeService: QrcodeService
    ) {}
    async register(body: RegisterDto) {
        

    }
}