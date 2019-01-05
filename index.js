const request = require('request');
const classy = require('./class.js');
const students = require('./students.js')
const fs = require('fs');
const file = require('file-system');

//Import Express Library
const express = require('express');
//Initiate an Express App
const app = express();
//Define a port
//Example: 192.168.1.1:3000  IP:PORT or localhost:3000
const port = 3000;
//Define your server's routes

class Student {
    constructor(name, age, city, grade) {


        this.name = name
        this.age = Number(age),
            this.city = city,
            this.grade = Number(grade)
    }
}

app.get('/class/add', (request, response) => {

    const {
        name,
        age,
        city,
        grade
    } = request.query;
    const std = {
        name,
        age,
        city,
        grade
    };

    const className = request.query.class;


    const studsObj = {
        students: [std],
    }

    if (className === "" || className === undefined || name === "" || name === undefined ||
        age === "" || age === undefined || city === "" || city === undefined || grade === "" || grade === undefined) {
        response.send({
            error: 'Please fill out all the information for the student'
        });
    } else {
        fs.readFile(`./class/${request.query.class}.json`, (err, data) => {
            if (err) {
                fs.writeFile(`./class/${className}.json`, JSON.stringify(studsObj), (error) => {

                    response.send({
                        "added": std,
                        "class": className
                    });
                })
            } else if (data) {
                let parsed = JSON.parse(data.toString()); 
                console.log(parsed);
                let parsedd = parsed['students'];//array
                for (let i = 0; i < parsedd.length; i++) {
                    if (parsedd[i]['name'] === name) {
                        const ind = i;
                        const index = parsedd[i]['name'].indexOf(name);
                        let newProfile = {
                            "name": name,
                            "age": Number(age),
                            "city": city,
                            "grade": Number(grade)
                        };
                      let random = studsObj['students'].splice(ind,4,{
                        "name": name,
                        "age": Number(age),
                        "city": city,
                        "grade": Number(grade)
                    });
                        fs.writeFile(`./class/${request.query.class}.json`, JSON.stringify(random), (error) => {
                            response.send({
                                "added": std,
                                "class": className
                            });
                        });
                    } 
                    else
                    console.log(studsObj['students'])
                     random = studsObj['students'].join(parsedd,','
                       );
                    fs.writeFile(`./class/${request.query.class}.json`, JSON.stringify(random), (error) => {
                        response.send({
                            "added": std,
                            "class": className
                        });
                    });

                };


            }
        })
    }
})










// const {
//     name,
//     age,
//     city,
//     grade
// } = request.query;
// const className = request.query.class;

// const std = new Student(name, age, city, grade);

// const studsObj = {
//     students: [std],
// }


// if (className === "" || className === undefined || name === "" || name === undefined ||
//     age === "" || age === undefined || city === "" || city === undefined || grade === "" || grade === undefined) {
//     response.send({
//         error: 'Please fill out all the information for the student'
//     });
// } else {
//     fs.readFile(`./class/${className}.json`, 'utf8', (error, data) => {
//         if (error) {
//             fs.writeFile(`class/${className}.json`, JSON.stringify(studsObj), (error) => {
//             });
//             response.send(data)
//             // ({
//             //     "added": std,
//             //     "class": className
//             // });
//         }
//     })
// }
// })
/*const parsed = JSON.parse(data);
                  for(let i = 0; i < parsed.length; i++){
                      if(parsed['students'][i]['name'] !== name){
                          const stds2 = new Student(name, age, city, grade)
                          studsObj[students].push(std2);
                      }
                      if(parsed['students'][i]['name'] === name){
                        fs.readFile(`class/${className}.json`, 'utf8', (error, data) => {
                            const index = JSON.parse(data)['students'].indexOf(name);
                            JSON.parse(data)['students'].splice(index, 4, std);
                            console.log(data);
                        });


                      }

                  }
                  
                  
                    
                  
                   
                })
            }*/

/*classy.add({name, age, className, city, grade}, (error, data) => {
        if (error) {
            response.status(500)
            response.json({
                error: 'Please fill out all the information for the student'
            });
            return;
        }

        response.json({
            "added": `${new Student(name, age, city, grade)}`,
            "class": `${className}`
        });
    })
    

});*/


/*app.get('/class/add',(request, response)=>{
    response.contentType('.html');
    const rec = request.query;
    const name = rec.name;
    const classes = rec.class;
    const age = Number(rec.age);
    const city = rec.city;
    const grade = Number(rec.grade);
    response.send(classy.add(name, age, city, grade, classes));
});*/



//Get your app serve to listen for requests
app.listen(port, () => {
    console.log('Server is listening on port 3000')
});