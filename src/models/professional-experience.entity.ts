import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class ProfessionalExperience extends Model<ProfessionalExperience>{
    // @Column({
    //     type: DataType.STRING,
    //     allowNull: false
    // })
    // name: string;

    // @Column({
    //     type: DataType.NUMBER,
    //     allowNull: false,
    //     unique: true,
    //     primaryKey: true,
    //     autoIncrement: true
    // })
    // id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nameCompany: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    endDate: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    office: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;
}