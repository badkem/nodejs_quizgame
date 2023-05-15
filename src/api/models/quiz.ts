import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "CauHoiLocal",
})
export class Quiz extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ID!: number;

  @Column({
    primaryKey: true,
    type: DataType.STRING,
    allowNull: false,
  })
  CauHoi!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  A!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  B!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  C!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  D!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  GiaiThich!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  DaChoi!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  DapAn!: string;
}
