import { ApiProperty } from "@nestjs/swagger";

export class CreateFormationDto {
    @ApiProperty()
    course: string;

    @ApiProperty()
    nameInstitution: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;
}
