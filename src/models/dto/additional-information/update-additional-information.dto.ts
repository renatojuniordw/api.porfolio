import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAdditionalInformationDto } from './create-additional-information.dto';

export class UpdateAdditionalInformationDto extends PartialType(CreateAdditionalInformationDto) {

    @ApiProperty()
    id: number;

}
