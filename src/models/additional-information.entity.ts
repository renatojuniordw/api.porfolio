import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class AdditionalInformation extends Model<AdditionalInformation>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
  
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;
}
