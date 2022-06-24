import { Injectable } from '@nestjs/common';

import { CreateAdditionalInformationDto } from 'src/models/dto/additional-information/create-additional-information.dto';
import { UpdateAdditionalInformationDto } from 'src/models/dto/additional-information/update-additional-information.dto';

@Injectable()
export class AdditionalInformationService {
  create(createAdditionalInformationDto: CreateAdditionalInformationDto) {
    return 'This action adds a new additionalInformation';
  }

  findAll() {
    return `This action returns all additionalInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalInformation`;
  }

  update(id: number, updateAdditionalInformationDto: UpdateAdditionalInformationDto) {
    return `This action updates a #${id} additionalInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalInformation`;
  }
}
