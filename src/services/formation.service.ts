import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateFormationDto } from 'src/models/dto/formation/create-formation.dto';
import { UpdateFormationDto } from 'src/models/dto/formation/update-formation.dto';

import { Formation } from 'src/models/formation.entity';

@Injectable()
export class FormationService {

  constructor(
    @InjectModel(Formation)
    private formationModel: typeof Formation
  ) { }

  create(createFormationDto: CreateFormationDto) {
    return this.formationModel.create(createFormationDto);
  }

  findAll(): Promise<Formation[]> {
    return this.formationModel.findAll();
  }

  findOne(id: number): Promise<Formation> {
    return this.formationModel.findByPk(id);
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return this.formationModel.update(updateFormationDto, {
      where: { id: id }
    });
  }

  async remove(id: number): Promise<void> {
    const current = await this.findOne(id);
    current.destroy();
  }
}
