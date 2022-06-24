import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class ProjectPortfolio extends Model<ProjectPortfolio>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    technologies: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    url: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    urlImg: string;
}