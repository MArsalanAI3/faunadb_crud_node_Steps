

const faunadb = require("faunadb"),
    q = faunadb.querry;
require('dotenv').config();


(async () => {


    var bc = new faunadb.Client({ secret: 'fnAD9IR-dQACBVcPL0AHDiPNJ7jn3ZzcvpbnJSBi' });

    try {
        var result = await bc.query(
            q.CreateCollection({ name: 'mana' })
        );
        console.log( result);

    }

    catch (error) {
        console.log('Error: ');
        console.log(error);
    }

})();
