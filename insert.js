import mongodb  from 'mongodb';
import fetch from 'node-fetch';




var mongoClient = mongodb.MongoClient;
var url = "mongodb+srv://kubera:kubera@cluster0.yykwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var collec = ["hp","ib","20dh","20dl","tg","tl","5m","10m","pdh","pdl","sve","n50","bn","na","nf","nfmcg","nit","nm","nmtl","nphar","npsu","npb","nrl","neng"];
var apiurl =[
  "https://ebs.tredcode.com/study-data/MONEYFLOW%20ABS",
  "https://ebs.tredcode.com/study-data/MONEYFLOW%20REL",
  "https://ebs.tredcode.com/study-data/NEAR%20DAYS%20HIGH",
  "https://ebs.tredcode.com/study-data/NEAR%20DAYS%20LOW",
  "https://ebs.tredcode.com/study-data/GAINER",
  "https://ebs.tredcode.com/study-data/LOSSER",
  "https://ebs.tredcode.com/study-data/5%20minute%20MOMENTUM%20SPIKE",
  "https://ebs.tredcode.com/study-data/10%20minute%20MOMENTUM%20SPIKE",
  "https://ebs.tredcode.com/study-data/5%20minute%20MOMENTUM%20SPIKE",
  "https://ebs.tredcode.com/study-data/5%20minute%20MOMENTUM%20SPIKE",
  "https://ebs.tredcode.com/study-data/SECTORIAL%20VIEW",
  "https://ebs.tredcode.com/study-data/NIFTY%2050",
  "https://ebs.tredcode.com/study-data/NIFTY%20BANK",
  "https://ebs.tredcode.com/study-data/NIFTY%20AUTO",
  "https://ebs.tredcode.com/study-data/NIFTY%20FIN%20SERV",
  "https://ebs.tredcode.com/study-data/NIFTY%20FMCG",
  "https://ebs.tredcode.com/study-data/NIFTY%20IT",
  "https://ebs.tredcode.com/study-data/NIFTY%20MEDIA",
  "https://ebs.tredcode.com/study-data/NIFTY%20METAL",
  "https://ebs.tredcode.com/study-data/NIFTY%20PHARMA",
  "https://ebs.tredcode.com/study-data/NIFTY%20PSU%20BANK",
  "https://ebs.tredcode.com/study-data/NIFTY%20PVT%20BANK",
  "https://ebs.tredcode.com/study-data/NIFTY%20REALITY",
  "https://ebs.tredcode.com/study-data/NIFTY%20ENERGY",


];



async function getPost(getd,getapi){
    const momentum = await fetch(getapi);
    const dat = await momentum.json();
    mongoClient.connect(url,


       function(err, databases) {
        if (err)
        {

          throw err;
        }
          console.log(getd);
        var nodetestDB = databases.db("kubera"); //here
        var maind = nodetestDB.collection(getd);
        maind.deleteMany({});
       maind.insertMany(dat.data, function (err, res) {
           if (err) throw err;
           else{
           console.log("Number of documents inserted: " + res.insertedCount);
            //return 1;
           }
             },);
  });
}






console.log(collec.length);
console.log(apiurl.length);



function loop()
{

  console.log("function restarted");
for(let i=0;i<collec.length;i++)
{

const ck = getPost(collec[i],apiurl[i]);
//console.log(i);

}
}





setInterval(function() {
  loop();

},10000);


