import { Module } from '@nestjs/common';

import { ProfessionalExperienceService } from '../services/professional-experience.service';
import { ProfessionalExperienceController } from '../controllers/professional-experience.controller';

@Module({
  controllers: [ProfessionalExperienceController],
  providers: [ProfessionalExperienceService]
})
export class ProfessionalExperienceModule {}
