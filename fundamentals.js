const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    } ,
    registration : {
        year: 201,
        countyCode: 'WD',
        number: 1058
    },
};

aCar.mileage = 10000;
aCar.color = {
    exteriorColor: 'red',
    interiorFabric: {
        texture : 'leather',
        shade: 'cream'
    }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log('Reg. = ' + aCar.registration.year + '-'+
aCar.registration.countyCode + '-' + aCar.registration.number + '.')
console.log('It is a ' + aCar.color.exteriorColor + ' car, ' +
aCar.mileage + ' mileage, with ' + 
aCar.color.interiorFabric.texture + ' interior...');