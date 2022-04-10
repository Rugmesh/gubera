import mongodb from 'mongodb';


var mongoClient = mongodb.MongoClient;
var url = "mongodb+srv://kubera:kubera@cluster0.yykwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var collec = ["hp","ib","20dh","20dl","tg","tl","5m","10m","pdh","pdl","sve","n50","bn","na","nf","nfmcg","nit","nm","nmtl","nphar","npsu","npb","nrl","neng"];

async function getPost(getd){

    mongoClient.connect(url, function(err, databases) {
        if (err)
        {
          throw err;
        }
         // console.log(getd);
        var nodetestDB = databases.db("kubera"); //here
        nodetestDB.createCollection(getd, function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
        });
  });
}
for(let i=0;i<collec.length;i++)
   {
       getPost(collec[i]);
   }