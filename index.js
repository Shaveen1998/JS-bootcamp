var input = '?foo=hello&bar=world'

input = input.substring(1)

var pairs = input.split('&')

var keyValue=pairs[0].split('=')
var keyValue=pairs[1].split('=')

var output = {

}

for(i=0;i<pairs.length;i++){
    var keyValuePair = pairs[i].split('=')
    var key = keyValuePair[0]
    var value = keyValuePair[1]
    
    output[key] = value
}

console.log(output)