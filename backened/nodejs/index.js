
// const app = require('./app');  // to import classes and variables form other files......


// console.log("Hello World!");
// var x = 3;
// var y = 4;
// var z = 5;
// console.log(x + y + z);
// console.log(app);


// Array in node js................................................................
// const array = [2,3,4,5,2,1,78,65];
// array.filter((item) => {
//     console.log(item)
// })

// interview quesions on filter with array...................................................
// let result = array.filter((item) => {
//     return item > 3
// })
// console.log(result);


// Global and non-global modules..........................................................
// console.log(">>",__dirname);
// console.log(__filename);

// M-1 to create a file using`fs`(file system module)...........................................
// const fs = require('fs');
// console.log("Hello Anupam");
// fs.writeFileSync("hello.txt","code step by step")

// M-2 to create a file using`fs`(file system module)...........................................
// require('fs').writeFileSync("abc.txt","as you wish");

// M-3 to create a file using`fs`(file system module)...........................................
// const gs = require('fs').writeFileSync;
// gs("abc.txt","abcffe");


//Creating a basic server using nodejs..............................................................
// const http = require('http');
// http.createServer(  (request, response) => {
//     response.write("<h1>Hello World</h1>");
//     response.end();
// }).listen(4500);

// Installing and using colors npm package/module
// const colors = require('colors');
// console.log("hello".black);


// Installing and using chalk npm package/module.
// const chalk = require('chalk');
// console.log(chalk.green('Hello'));


// console.log("Hello World");  // to test nodemon package........................................



// Creating Simple API in node.js................................................. 
// const http = require("http");
// const data = require('./data');
// http.createServer((request, response) => {
//     response.writeHead(200,{'Content-Type':'application\json'});
//     response.write(JSON.stringify(data));
//     response.end();
// }).listen(5000);



// Demo of input from command line(node index.js `your text`)...........................................
// console.log(process.argv[2]);
// const fs = require('fs');
// const input = process.argv;
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove') {
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log("invalid output");
// }



// Creating multple files using for loop in node js...........................................................................
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// console.log(dirPath)
// for(let i=0;i<5;i++) {
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,"hello World");
// }


// Example - 1 for understanding file/directory reading in node js..............................................................
// fs.readdir(dirPath,(error,files) => {
//     // console.log(files);   
//     files.forEach((files) => {   
//         console.log("file name is -> ",files) 
//     })
// })


// Example -2 for understanding file/directory reading and writing in node js..............................................................
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,"example");
// // console.log(dirPath);
// for(i=0;i<5;i++) {
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,`this is apple file ${i}`);
// }

// fs.readdir(dirPath,(error, files)=> {
//     // console.log(files); // this will return file array....................

//     // for(i=0;i<files.length;i++) {  // for loop for getting inividual files........
//     //     console.log(files[i]);
//     // }

//     files.forEach((file)=> {  // forEach method for getting individual files.......
//         console.log(`file is -> ${file}`);
//     })
// })


// CRUD with File System............................................................................................................

// 1. Make files............................................
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/hello.txt`;
// fs.writeFileSync(filePath,`Hi I'm Anupam Anand`);

// 2. Read files...............................................
// fs.readFile(filePath,'utf-8',(error, item)=> {
//     console.log(item);
// })

// 3. Append data into existing files.........................................
// fs.appendFile(filePath,` and I'm B.tech student`,(error) => {
//     if(!error) console.log("file is updated....");
// });

// 4. Rename filename.................................................
// fs.rename(filePath,`${dirPath}/student.txt`,(error) => {
//     if(!error) console.log("file is updated.....");
// });

// 5. Delete filename....................................
// fs.unlinkSync(`${dirPath}/student.txt`);



// Asynchronous Basics in node js...................................................................................................

// console.log("start.dmg......");
// setTimeout(() => {
//     console.log("logic.dmg....")
// }, 2000);

// console.log("complete.dmg....");

// Drawbacks of asynchronous nature....................................................................................................

// let a = 10;
// let b = 20;

// setTimeout(() => {
//     b=30;
// },2000)
// console.log(a+b);  // output will be 30 instead of 40.




// Handle asynchronous Data in node js using `promises` and `callbacks`......................................................................
// let a = 10;
// let b = 20;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     },2000)
// });

// waitingData.then((data) => {
//     console.log(a+data);
// })




// Express.........

// Creating a basic server using Express js.......................................................................................
// const express = require('express');
// const app = express();
// app.get('', (request, response) => {
//     // console.log("data sent by browser -> ",request.query.name)
//     // response.send("hello, this is Home page");
//     response.send(`Hello, ${request.query.name}
//     <h1>Welcome to the home page<h1><a href="/about">Go to About Page</a></h1></h1>
//     `);
// });

// app.get('/about', (request, response) => {
//     response.send(`<input type="text" placeholder="Username" value= "${request.query.name}" />
//     <button>Click Me</button>
//     <a href="/">Go to home page</a>
//     `);
// });

// app.get('/help', (request, response) => {
//     response.send(`<h1>Hello, this is help page</h1>
//     <a href="/">Go to home page</a>
//     `);
// });

// app.get('/info', (request, response) => {
//     response.send([{
//         name: 'ANUPAM',
//         email: 'anupam@xyz.com'
//     },
//     {
//         name: 'anurag',
//         email: 'anurag@cde.com'
//     }
//     ]);
// });

// app.listen(5000);


// Making HTML pages in node js.......................................................................................................

// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');
// // M-1 to load html pages in node js (in the url of browser you need to write localhost:3000/htmlpage.html).....
// // app.use(express.static(publicPath));   

// // M-2 to load html pages in node js (in the url of browser you need to write localhost:3000/htmlpage).........
// app.get('',(request, response) => {
//     response.sendFile(`${publicPath}/about.html`);
// })
// app.get('/home',(request,response) => {
//     response.sendFile(`${publicPath}/home.html`)
// })
// app.get('*',(request,response) => {
//     response.sendFile(`${publicPath}/Error.html`)
// })

// // Template Engine -> Used for making dynamic pages........................
// app.set('view engine','ejs');
// app.get('/profile',(request, response) => {
//     const user = [{
//         name: 'anupam anand',
//         email: 'anupam@gxzil.com',
//         city: 'noida'
//     }]

//     const userObj = {
//         name: 'anupam anand1',
//         email: 'anupam@gxzil.com',
//         city: 'noida',
//         skills: ['c++','Js','Kotlin','node']
//     }
//     response.render('profile',{user, userObj});
// });

// app.get('/login',(request, response) => {
//     response.render('login');
// })

// app.listen(5000);



// Middleware -> used to filter response based on varoius factors..................................................................................................

const express = require('express');
const app = express();
const reqFilter = require('./middleware');  // M-1 of using route level middleware

// M-2 of using route level middleware.....................
const route = express.Router();  
route.use(reqFilter);

// const reqFilter = (request, response, next) => {
//     // console.log('reqFilter');
//     if(!request.query.age) {
//         response.send("please provide age")
//     }
//     else if(request.query.age < 18 ) {
//         response.send("Access denied")
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter);  // for application level middleware.........

app.get('/',(request, response) => {
    response.send("Welcome to Home Page");
});

// Route level middleware(reqFilter to be added inside that particular page).....
app.get('/users',reqFilter, (request, response) => {  // M-1 of using route level middleware........
    response.send("Welcome to User Page")
});

app.get('/about',(request,response) => {  // middleware is not applied to this page............
    response.send("welcome to about page");
});

// route instance that we created above can be added in this way.............
route.get('/contact',(request,response) => {
    response.send("welcome to contact page");
});
app.use('/',route);

app.listen(5000);