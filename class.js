const classy = {};
const fs = require('fs');
const file = require('file-system');
const student = require('./students.js');



/*classy.save = (userList, cb) => {
    console.log('IN function save')
    const userRows = [];
    for (let user of userList) {
        console.log(user)
        userRows.push(user.name +','+ user.age)
    }
    console.log(userRows)
    const fileblob = userRows.join('\n');
    console.log(fileblob)
    fs.writeFile(`./${className}.json`, fileblob, (err, res) => {
        cb(err, res)
    })
};

classy.add = (row, cb) => {
    // load existing content
    // update with new row
    // save new content

    classy.load(currentUsers => {
        currentUsers.push(row);
        save(currentUsers, (error, response) => {
            // we done - new content saved
            cb(true, response)
        });
    })
}

classy.load = (cb) => {
    console.log('in LOAD!')
    fs.readFile(`./${className}.json`, 'utf8', (err, data) => {
        if (!data) {
            cb([])
            return;
            
        }
        const rows = data.split('\n')
        const users = [];
        console.log(err, rows)
        for (let row of rows) {
            const bits = row.split(',');
            users.push({name: bits[0], age: parseInt(bits[1], 10)})
        }
        cb(users)
    })
}


/*classy.add = (name, age, city, grade, className) => {
    if(className === "" || className === undefined||name === "" || name === undefined
||age === "" || age === undefined|| city === "" || city === undefined || grade === "" || grade === undefined){
        let errorMessage = {
            error: 'Please fill out all the information for the student'        
        }
        return errorMessage;
    }
        if (!classList.includes(className)){
            const user = new Student(name, age, city, grade);
            let addMessage = {
                added: user,
                class: className,
            }
            fs.writeFile(`${className}.txt`, data, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
           
            return addMessage;
        }
        else if (classList.includes(className)){
            const user = new Student(name, age, city, grade);
            let addMessage = {
                added: user,
                class: className
            }
            return addMessage; 
        }
    }*/




module.exports = classy;