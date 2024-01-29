import 'module-alias/register';
import MyController from "@controllers/my.controller";


const myController = new MyController();
console.log(myController.getStudents());