const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        {
            name: 'Pat Smith',
            address : '1 Main Street'
        },
        {
            name: 'Sheila Dwyer',
            address : '2 High Street'
        }
    ],
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    } ,
    registration : {
        year: 201,
        county_code: 'WD',
        number: 1058
    },
};

aCar.mileage = 10000;
aCar.color = {
    exterior_color: 'red',
    interior_fabric: {
        texture : 'leather',
        shade: 'cream'
    }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log('Reg. = ' + aCar.registration.year + '-'+
aCar.registration.county_code + '-' + aCar.registration.number + '.')
console.log('It is a ' + aCar.color.exterior_color + ' car, ' +
aCar.mileage + ' mileage, with ' + 
aCar.color.interior_fabric.texture + ' interior...');
console.log('First owner : ' + aCar.previous_owners[0].name +  
' - ' + aCar.previous_owners[0].address)