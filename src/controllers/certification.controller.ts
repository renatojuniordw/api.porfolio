import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { CertificationService } from '../services/certification.service';
import { JoiValidationPipe } from 'src/config/joiValidationPipe.pipe';

import { CreateCertificationDto } from 'src/models/dto/certification/create-certification.dto';
import { UpdateCertificationDto } from 'src/models/dto/certification/update-certification.dto';

import { CertificationSchema } from 'src/models/schema/certification.schema';

@Controller('certification')
@ApiTags('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: CreateCertificationDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCertificationDto
  })
  @UsePipes(new JoiValidationPipe(CertificationSchema))
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Get()
  findAll() {
    return this.certificationService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.certificationService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: UpdateCertificationDto })
  @UsePipes(new JoiValidationPipe(CertificationSchema))
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateCertificationDto: UpdateCertificationDto
  ) {
    return this.certificationService.update(+id, updateCertificationDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.certificationService.remove(+id);
  }
}
