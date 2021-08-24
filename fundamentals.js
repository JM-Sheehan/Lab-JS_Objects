const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
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
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
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
' - ' + aCar.previous_owners[0].address);

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
} 

for(let j = 0; j< aCar.previous_owners.length; j++){
    console.log(aCar.previous_owners[j].name);
}

for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}