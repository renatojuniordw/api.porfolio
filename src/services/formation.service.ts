import { Injectable } from '@nestjs/common';

import { CreateFormationDto } from 'src/models/dto/formation/create-formation.dto';
import { UpdateFormationDto } from 'src/models/dto/formation/update-formation.dto';

@Injectable()
export class FormationService {
  create(createFormationDto: CreateFormationDto) {
    return 'This action adds a new formation';
  }

  findAll() {
    return `This action returns all formation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formation`;
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return `This action updates a #${id} formation`;
  }

  remove(id: number) {
    return `This action removes a #${id} formation`;
  }
}
