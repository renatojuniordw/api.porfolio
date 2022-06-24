import { ApiProperty } from "@nestjs/swagger";

export class CreateFormationDto {
    @ApiProperty()
    course: string;

    @ApiProperty()
    institution_name: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;
}
