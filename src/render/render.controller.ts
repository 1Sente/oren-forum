import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { RenderService } from './render.service';

@Controller('render')
export class RenderController {
  constructor(private readonly renderService: RenderService) {}

  @Get('profile/:id')
  @Render('profile')
  async getProfile(@Param('id') id: string) {
    const user = await this.renderService.profile(id);
    if(!user) throw new NotFoundException('Пользователь не найден')
    return {
      fio: user.fio,
      email: user.email,
      phoneNumber: user.phoneNumber,
      organization: user.organization,
      post: user.post,
      city: user.city,
      district: user.district,
    };
  }
}
