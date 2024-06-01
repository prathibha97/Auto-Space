import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    console.log(
      '🚀 ~ UsersService ~ update ~ updateUserInput:',
      updateUserInput,
    );
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
