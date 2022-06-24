import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class AdditionalInformation extends Model<AdditionalInformation>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @ApiProperty()
    name: string;
  
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @ApiProperty()
    description: string;
}
