import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCertificationDto } from './create-certification.dto';

export class UpdateCertificationDto extends PartialType(CreateCertificationDto) {
    @ApiProperty()
    id: number;
}
