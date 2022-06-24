import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CertificationService } from '../services/certification.service';

import { CreateCertificationDto } from 'src/models/dto/certification/create-certification.dto';
import { UpdateCertificationDto } from 'src/models/dto/certification/update-certification.dto';

@Controller('certification')
@ApiTags('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Post()
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Get()
  findAll() {
    return this.certificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificationDto: UpdateCertificationDto) {
    return this.certificationService.update(+id, updateCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificationService.remove(+id);
  }
}
