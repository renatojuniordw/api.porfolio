import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes } from '@nestjs/common';

import { JoiValidationPipe } from 'src/config/joiValidationPipe.pipe';
import { AdditionalInformationService } from '../services/additional-information.service';

import { CreateAdditionalInformationDto } from 'src/models/dto/additional-information/create-additional-information.dto';
import { UpdateAdditionalInformationDto } from 'src/models/dto/additional-information/update-additional-information.dto';

import { AdditionalInformationSchema } from 'src/models/schema/additional-information.schema';

@Controller('additional-information')
@ApiTags('additional-information')
export class AdditionalInformationController {
  constructor(private readonly additionalInformationService: AdditionalInformationService) { }

  @Post()
  @ApiBody({ type: CreateAdditionalInformationDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateAdditionalInformationDto
  })
  @UsePipes(new JoiValidationPipe(AdditionalInformationSchema))
  create(
    @Body() createAdditionalInformationDto: CreateAdditionalInformationDto
  ) {
    return this.additionalInformationService.create(createAdditionalInformationDto);
  }

  @Get()
  findAll() {
    return this.additionalInformationService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.additionalInformationService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateAdditionalInformationDto })
  @UsePipes(new JoiValidationPipe(AdditionalInformationSchema))
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateAdditionalInformationDto: UpdateAdditionalInformationDto
  ) {
    return this.additionalInformationService.update(+id, updateAdditionalInformationDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.additionalInformationService.remove(+id);
  }

}
