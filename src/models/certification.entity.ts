import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Certification extends Model<Certification>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nameInstitution: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false
    })
    year: number;
}
