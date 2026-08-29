import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

/**
 * PrismaModule is marked @Global so PrismaService is available across
 * the entire application without re-importing it in every feature module.
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
