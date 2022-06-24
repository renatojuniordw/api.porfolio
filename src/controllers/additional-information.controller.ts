import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AdditionalInformationService } from '../services/additional-information.service';

import { CreateAdditionalInformationDto } from 'src/models/dto/additional-information/create-additional-information.dto';
import { UpdateAdditionalInformationDto } from 'src/models/dto/additional-information/update-additional-information.dto';
import { AdditionalInformation } from 'src/models/additional-information.entity';


@Controller('additional-information')
@ApiTags('additional-information')
export class AdditionalInformationController {
  constructor(private readonly additionalInformationService: AdditionalInformationService) { }

  @Post()
  @ApiBody({ type: CreateAdditionalInformationDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: AdditionalInformation
  })
  create(@Body() createAdditionalInformationDto: CreateAdditionalInformationDto) {
    return this.additionalInformationService.create(createAdditionalInformationDto);
  }

  @Get()
  findAll() {
    return this.additionalInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalInformationService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateAdditionalInformationDto })
  update(@Param('id') id: string, @Body() updateAdditionalInformationDto: UpdateAdditionalInformationDto) {
    return this.additionalInformationService.update(+id, updateAdditionalInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalInformationService.remove(+id);
  }
}
