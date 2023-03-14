var Temp =  []

Temp.push(0)
Temp.push(1)
Temp.push(2)
Temp.push(3)
Temp.push(4)
Temp.push(5)
Temp.push(6)
Temp.push(7)


Temp.unshift(-1)
Temp.pop()
Temp.shift()

Temp.splice(2, 3)
Temp.splice(2, 0, 2 , 3, 4)


var avgTempWeek = []
var avgTempWeek1 = [1, 2, 3 ,4 ,5 ,6 ,7]
var avgTempWeek2 = [8, 9, 10, 11, 12, 13]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

for(var i = 0 ; i < avgTempWeek.length; i++){
    for(var j = 0 ; j< avgTempWeek[i].length; j++){
        console.log(avgTempWeek[i][j])
    }
}



// console.log(Temp)
// console.log(avgTempWeek)