import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateProfessionalExperienceDto } from 'src/models/dto/professional-experience/create-professional-experience.dto';
import { UpdateProfessionalExperienceDto } from 'src/models/dto/professional-experience/update-professional-experience.dto';

import { ProfessionalExperience } from 'src/models/professional-experience.entity';

@Injectable()
export class ProfessionalExperienceService {

  constructor(
    @InjectModel(ProfessionalExperience)
    private professionalExperienceModel: typeof ProfessionalExperience
  ) { }

  create(createProfessionalExperienceDto: CreateProfessionalExperienceDto) {
    return this.professionalExperienceModel.create(createProfessionalExperienceDto);
  }

  findAll(): Promise<ProfessionalExperience[]> {
    return this.professionalExperienceModel.findAll();
  }

  findOne(id: number): Promise<ProfessionalExperience> {
    return this.professionalExperienceModel.findByPk(id);
  }

  update(id: number, updateProfessionalExperienceDto: UpdateProfessionalExperienceDto) {
    return this.professionalExperienceModel.update(updateProfessionalExperienceDto, {
      where: { id: id }
    });
  }

  async remove(id: number) {
    const current = await this.findOne(id);
    current.destroy();
  }
}
