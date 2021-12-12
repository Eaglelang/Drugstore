//using mongoClient to connect to database
MongoClient.connect(url, (err, db)=>{
    var cursor = db.collection('Drug').find();
    //Creating a cursor of record
    cursor.each(function(err, doc) {
      console.log(doc);
      console.log('connected')
     db.close()
    })
    //Inserting a document into the db
    db.collection('Drug').insertOne({
        Drugid: 4,
        DrugName: "NewDrug"
    })
    //Updating a document into a db
    db.collection('Drug').updateOne({
        "DrugName": "NewDrug"
    }, {
        $set: {
            "DrugName": "Leciferol"
        }
    });
    //Deleting a document
    /*db.collection('Drug').deleteOne(

        {
            "DrugName": "Leciferol"
        }

    );*/
})
