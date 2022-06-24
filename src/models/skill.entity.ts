import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Skill extends Model<Skill>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
}
