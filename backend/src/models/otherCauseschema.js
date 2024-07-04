import mongoose  from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const otherCauseSchema = new mongoose.Schema({
amount:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
orgname:{
    type:String,
    required:true,
},
employmentStatus:{
    type:String,
    required:true
},
mob:{
    type:String,
    required:true
},
qualification:{
    type:String,
    required:true
},
dono_knowledge:{
    type:String,
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
otherCauseSchema.plugin(mongooseAggregatePaginate);





export const OtherCause = mongoose.model('OtherCause', otherCauseSchema);
