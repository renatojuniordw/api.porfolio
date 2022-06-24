import { Injectable } from '@nestjs/common';

import { CreateProfessionalExperienceDto } from 'src/models/dto/professional-experience/create-professional-experience.dto';
import { UpdateProfessionalExperienceDto } from 'src/models/dto/professional-experience/update-professional-experience.dto';

@Injectable()
export class ProfessionalExperienceService {
  create(createProfessionalExperienceDto: CreateProfessionalExperienceDto) {
    return 'This action adds a new professionalExperience';
  }

  findAll() {
    return `This action returns all professionalExperience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professionalExperience`;
  }

  update(id: number, updateProfessionalExperienceDto: UpdateProfessionalExperienceDto) {
    return `This action updates a #${id} professionalExperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} professionalExperience`;
  }
}
