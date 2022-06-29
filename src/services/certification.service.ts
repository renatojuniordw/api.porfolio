import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Certification } from 'src/models/certification.entity';

import { CreateCertificationDto } from 'src/models/dto/certification/create-certification.dto';
import { UpdateCertificationDto } from 'src/models/dto/certification/update-certification.dto';

@Injectable()
export class CertificationService {

  constructor(
    @InjectModel(Certification)
    private certificationModel: typeof Certification
  ) { }

  create(createCertificationDto: CreateCertificationDto) {
    return this.certificationModel.create(createCertificationDto);
  }

  findAll(): Promise<Certification[]> {
    return this.certificationModel.findAll();
  }

  findOne(id: number): Promise<Certification> {
    return this.certificationModel.findByPk(id);
  }

  update(id: number, updateCertificationDto: UpdateCertificationDto) {
    return this.certificationModel.update(updateCertificationDto, {
      where: { id: id }
    });
  }

  async remove(id: number) {
    const current = await this.findOne(id);
    current.destroy();
  }
}
