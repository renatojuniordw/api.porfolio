import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionalExperienceDto } from './create-professional-experience.dto';

export class UpdateProfessionalExperienceDto extends PartialType(CreateProfessionalExperienceDto) {
    @ApiProperty()
    id: string;
}
