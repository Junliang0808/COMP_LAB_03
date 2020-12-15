const arr = [{
    UniqueId: 1,
    name: 'ROY',
    SEX: 'F',
    EMAIL: '5588@GMAIL.COM'
},
{
    UniqueId: 2,
    name: 'JAMES',
    SEX: 'F',
    EMAIL: '1188@GMAIL.COM'
},
{
    UniqueId: 3,
    name: 'DANNIS',
    SEX: 'F',
    EMAIL: '2288@GMAIL.COM'
},
{
    UniqueId: 4,
    name: 'PAUL',
    SEX: 'F',
    EMAIL: '3388@GMAIL.COM'
}];

exports.index = (_, res) => {
    res.status(200).json(arr);
};

exports.show = (req,res,next) => {

    const id = req.params.id;
    const a = arr.UniqueId[Id];
    
};