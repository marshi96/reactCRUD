const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//define collection and schemas
let Student=new Schema({
  person_name:{
    type:String
  },
  uni_name:{
    type:String
  },
  id_name:{
    type:Number
  }
},{
  collection:'student'
});
module.exports=mongoose.model('Student',Student);
