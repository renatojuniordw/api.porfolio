import { Module } from '@nestjs/common';

import { CertificationService } from '../services/certification.service';
import { CertificationController } from '../controllers/certification.controller';

@Module({
  controllers: [CertificationController],
  providers: [CertificationService]
})
export class CertificationModule {}
