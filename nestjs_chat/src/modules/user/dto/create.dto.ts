import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(4, 20)
  userName: string;
  @IsString()
  password: string;
  @IsEmail()
  email: string;
}
