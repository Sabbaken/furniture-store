const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

exports.fetchSection = functions.https.onRequest((request, response) => {

  let items = [];
  switch (request.query.section) {
    case 'livingroom':
      items = ['tBOAxDwalPgr1CWtGBT8','stNAdaQ3aNdYZqM2WtV2','kXjyw6VKEWkRYWkyvrmy',]
      break;

    case 'bedroom':
      items = ['Nse1JjFXLw43BmzgTKhX','stNAdaQ3aNdYZqM2WtV2','WYibtrcVcC6XzYRCu8Z7','',]
      break;

    case 'kitchen':
      items = ['WYibtrcVcC6XzYRCu8Z7','IdRtqKcKf08Cv2S4LRlB','stNAdaQ3aNdYZqM2WtV2',]
      break;

    case 'trending':
      items = ['5Nkx2TeNxzDrekJqd1lj','IdRtqKcKf08Cv2S4LRlB','Nse1JjFXLw43BmzgTKhX','WYibtrcVcC6XzYRCu8Z7',]
      break;

    default:
      items = ['WYibtrcVcC6XzYRCu8Z7','IdRtqKcKf08Cv2S4LRlB','stNAdaQ3aNdYZqM2WtV2',]
      break;
  }

  let furnitureRef = db.collection('furniture');

  furnitureRef.get()
    .then(snapshot => {
      let selectedItems = [];

      snapshot.forEach(doc => {
        if (items.indexOf(doc.id) !== -1){
          selectedItems.push(doc.data())
        }
      });

      response.send({section: selectedItems});
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});



