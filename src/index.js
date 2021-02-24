module.exports = function reverse (n) {
    var digit, result = 0

    while( n ){
        if (n < 0) {n = n*(-1)}
        digit = n % 10                  
        result = (result * 10) + digit  
        n = n/10|0                      
    }  
  
    return result
  
}



