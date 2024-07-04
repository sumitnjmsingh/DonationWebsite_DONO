import mongoose  from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const medicalSchema = new mongoose.Schema({
amount:{
    type:String,
    required:true
},
purpose:{
    type:String,
    required:true
},
organiser:{
    type:String,
    required:true
},
employmentStatus:{
    type:String,
    required:true
},

avatar:{
    type:String,
    required:true,
},
mob:{
    type:String,
    required:true
},
category:{
    type:String,
    uppercase:true,
    required:true
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
},


  
},{
    timestamps: true
});
medicalSchema.plugin(mongooseAggregatePaginate);




export const Medical = mongoose.model('Medical', medicalSchema);
