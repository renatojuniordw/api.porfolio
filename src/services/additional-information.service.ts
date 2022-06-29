import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { AdditionalInformation } from 'src/models/additional-information.entity';

import { CreateAdditionalInformationDto } from 'src/models/dto/additional-information/create-additional-information.dto';
import { UpdateAdditionalInformationDto } from 'src/models/dto/additional-information/update-additional-information.dto';

@Injectable()
export class AdditionalInformationService {

  constructor(
    @InjectModel(AdditionalInformation)
    private additionalInfModel: typeof AdditionalInformation
  ) { }

  create(createAdditionalInformationDto: CreateAdditionalInformationDto) {
    return this.additionalInfModel.create(createAdditionalInformationDto);
  }

  findAll(): Promise<AdditionalInformation[]> {
    return this.additionalInfModel.findAll();
  }

  findOne(id: number): Promise<AdditionalInformation> {
    return this.additionalInfModel.findByPk(id);
  }

  update(id: number, updateAdditionalInformationDto: UpdateAdditionalInformationDto) {
    return this.additionalInfModel.update(updateAdditionalInformationDto, {
      where: { id: id }
    });
  }

  async remove(id: number) {
    const current = await this.findOne(id);
    current.destroy();
  }
}
