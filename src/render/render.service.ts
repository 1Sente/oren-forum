import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RenderService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
    async profile(id: string) {
        const user = await this.prismaService.user.findFirst({where: {id}})
        return user
    }
}
