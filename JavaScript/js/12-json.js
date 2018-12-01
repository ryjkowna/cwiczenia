//  let eurUsd = {
//     last: 1.1344,
//     cur:1.13552,
// // };

//  console.log(eurUsd.last);

 let grupa = {
 student: ['Paulina', 'Kasia', 'Marta', 'Kuba'],
   nauczyciel: 'Krystian',

};
 console.log(grupa);

let grupaStudentow = {
    'grupa': [
        {
            'student': 'Paulina',
            'wzrost': '165'
        },
        {
            'student': 'Kasia',
            'wzrost': '168'
        },
        {
            'student': 'Marta',
            'wzrost': '172'
        }, 
        {
            'student': 'Kuba',
            'wzrost': '179'
        }
    ],
    'nauczyciel': 'Krystian',
}

for (let key in grupaStudentow) {
    
    console.log(Array.isArray(grupaStudentow[key]));
   grupaStudentow[key].forEach(element => {
       console.log( "Student: "+ element.student + " o wzroście:" + element.wzrost + " cm");
       
   });
}