import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('reg')
  async register(@Body() body: RegisterDto): Promise<RegisterDto> {
    return await this.registerService.register(body);
  }
}
