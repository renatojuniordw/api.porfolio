import { ApiProperty } from "@nestjs/swagger";

export class CreateCertificationDto {
    @ApiProperty()
    code: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nameInstitution: string;

    @ApiProperty()
    year: number;
}
