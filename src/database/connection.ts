import { Sequelize } from "sequelize-typescript"
const sequelize =  new Sequelize({
    database : process.env.DB_NAME,
    username :process.env.DB_USERNAME, //deafult username xa
    password : "",
    host : process.env.DB_HOST, //database location
    dialect : "mysql", // kun database used bhaxa bhanii ho ani dialect .env maa support na gareko le
    port : Number(process.env.DB_PORT),  //number maa convert garnu parney hudaa haamii number lekhaxau
    models : [__dirname + '/models']

    
  
})
sequelize.authenticate().then(()=>{
    console.log("Authenticated,connected")
})
.catch((error)=>{
    console.log(error)
    

})
sequelize.sync({force:true})
.then(()=>{
    console.log("migrated sucessfully new changes")
})
export default sequelize