import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../index';
import { FirstAttribute } from './interface';

export interface FirstInput extends Optional<FirstAttribute, 'id'> {}
export interface FirstOuput extends Required<FirstAttribute> {}

class First
  extends Model<FirstAttribute, FirstInput>
  implements FirstAttribute
{
  declare id: number;
  declare email: string;
  declare fullname: string;
  static modelDefiner() {
    First.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        fullname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        paranoid: true,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'first',
        tableName: 'first',
      }
    );
  }
}

export default First;
