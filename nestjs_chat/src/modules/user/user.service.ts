import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    try {
      let user = await this.prisma.user.create({
        data: {
          ...data,
          avatar: 'http://127.0.0.1:3000/avatar_default.png',
          createdAt: String(Date.now()),
          updatedAt: String(Date.now()),
        },
      });
      return { data: user };
    } catch (err) {
      return { err };
    }
  }
}
