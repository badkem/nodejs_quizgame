import { sequelize, DataTypes } from "../db";

const QuizModel = sequelize.define(
  "Quiz",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true },
    CauHoi: { type: DataTypes.STRING, allowNull: false },
    A: { type: DataTypes.STRING, allowNull: false },
    B: { type: DataTypes.STRING, allowNull: false },
    C: { type: DataTypes.STRING, allowNull: false },
    D: { type: DataTypes.STRING, allowNull: false },
    GiaiThich: { type: DataTypes.STRING, allowNull: false },
    DaChoi: { type: DataTypes.INTEGER, allowNull: false },
    dapan: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "CauHoiLocal",
  }
);

export default QuizModel;
