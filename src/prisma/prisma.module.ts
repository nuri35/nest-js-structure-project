import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Global() //this is module global.
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
