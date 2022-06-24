import { Module } from '@nestjs/common';

import { FormationService } from '../services/formation.service';
import { FormationController } from '../controllers/formation.controller';

@Module({
  controllers: [FormationController],
  providers: [FormationService]
})
export class FormationModule {}
