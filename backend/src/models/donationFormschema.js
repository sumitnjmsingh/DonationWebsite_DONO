import mongoose  from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const DonationFormschema = new mongoose.Schema({
amount:{
    type:String,
    required:true
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
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
},
  
},{
    timestamps: true
});
DonationFormschema.plugin(mongooseAggregatePaginate);





export const DonationForm = mongoose.model('DonationForm', DonationFormschema);
