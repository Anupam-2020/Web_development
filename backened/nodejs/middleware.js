module.exports =  reqFilter = (request, response, next) => {
    // console.log('reqFilter');
    if(!request.query.age) {
        response.send("please provide age")
    }
    else if(request.query.age < 18 ) {
        response.send("Access denied")
    }
    else {
        next();
    }
}