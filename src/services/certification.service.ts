import { Injectable } from '@nestjs/common';

import { CreateCertificationDto } from 'src/models/dto/certification/create-certification.dto';
import { UpdateCertificationDto } from 'src/models/dto/certification/update-certification.dto';

@Injectable()
export class CertificationService {
  create(createCertificationDto: CreateCertificationDto) {
    return 'This action adds a new certification';
  }

  findAll() {
    return `This action returns all certification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certification`;
  }

  update(id: number, updateCertificationDto: UpdateCertificationDto) {
    return `This action updates a #${id} certification`;
  }

  remove(id: number) {
    return `This action removes a #${id} certification`;
  }
}
