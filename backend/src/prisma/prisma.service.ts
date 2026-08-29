import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService wraps PrismaClient and integrates with NestJS lifecycle hooks.
 *
 * - OnModuleInit  → connects to the database when the NestJS app starts
 * - OnModuleDestroy → gracefully disconnects when the app shuts down
 *
 * Inject PrismaService anywhere you need database access; because PrismaModule
 * is @Global, no extra import is required in feature modules.
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
