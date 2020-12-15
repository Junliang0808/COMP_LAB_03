const {index,show} = require('../controllers/people');

 module.exports = router => {
    router.get('/', index);
    router.get('/people', index);

     return router;
 };   