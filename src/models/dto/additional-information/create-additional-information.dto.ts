import { ApiProperty } from "@nestjs/swagger";

export class CreateAdditionalInformationDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

}
