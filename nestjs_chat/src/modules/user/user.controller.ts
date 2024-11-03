import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.dto';
import { Response } from 'express';
import { RESPONSE_MESSAGES } from 'src/common/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() body: CreateUserDto, @Res() res: Response) {
    try {
      const { data, err } = await this.userService.create(body);
      if (err)
        throw {
          message: RESPONSE_MESSAGES.ERROR_CREATING_USER,
        };
      return res.status(200).json({ data });
    } catch (err) {
      return res
        .status(500)
        .json({
          message: err.message ? err.message : RESPONSE_MESSAGES.ERROR_UNKNOW,
        });
    }
  }
}
