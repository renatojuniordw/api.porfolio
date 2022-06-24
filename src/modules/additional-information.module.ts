import { Module } from '@nestjs/common';

import { AdditionalInformationService } from '../services/additional-information.service';
import { AdditionalInformationController } from '../controllers/additional-information.controller';

@Module({
  controllers: [AdditionalInformationController],
  providers: [AdditionalInformationService]
})
export class AdditionalInformationModule {}
