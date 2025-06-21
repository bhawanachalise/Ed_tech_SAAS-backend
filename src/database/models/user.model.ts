import { userInfo } from "os"
import { Table,Column,Model,DataType, PrimaryKey } from "sequelize-typescript"
@Table({
    tableName:'users',//phpmyadmin maa dekhinii vo
    modelName : 'User',//yp project maa aauni vo
    timestamps : true

}) 
class User extends Model{
    @Column({
   primaryKey : true,
   type : DataType.UUID,
   defaultValue : DataType.UUIDV4
    }) 
    declare id :string
    
    @Column({
        type:DataType.STRING
    })
    declare username : string
    @Column({
       type : DataType.STRING 
    })
    declare password : string
    @Column({
       type : DataType.STRING 
    })
    declare email : string
    @Column({
        type : DataType.ENUM('teacher','instituate','super-admin','student'),
        defaultValue : 'student',    
    })
    
    declare role:string

}
export default User