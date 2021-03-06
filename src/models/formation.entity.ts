import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Formation extends Model<Formation>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    course: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nameInstitution: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    endDate: Date;
}
