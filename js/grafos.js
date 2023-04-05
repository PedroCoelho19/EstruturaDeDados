class Dictionary{
    constructor(){
        this.items = {}
    }

    set(key , value){
        this.items[key] = value
    }

    delete(key){
        if(this.has(key)){
            delete this.items[key]
            return true
        }
        return false
    }

    has(key){
        return this.items.hasOwnProperty(key)
    }

    get(key){
        return this.has(key) ? this.items[key] : undefined 
    }

    clear(){
        items = {}
    }

    size(){
        return Object.keys(this.items).length
    }

    keys(){
        return Object.keys(this.items)
    }

    values(){
        var values = [],
        keys = Object.keys(this.items)

        for (var i = 0; i < keys.length; i++){
            values.push(this.items[keys[i]]) 
        }

        return values
    }

    getitems(){
        return this.items 
    }
}

class Graph{
    constructor(){
        this.vertices = [],
        this.adjlist = new Dictionary()
    }
    addVertex(v){
       this.vertices.push(v)
       this.adjlist.set(v, [])
    }

    addEdge(v , w){
        this.adjlist.get(v).push(w)
        this.adjlist.get(w).push(v)
    }

    toString(){ 
        var s = ''
        for(var i = 0 ; i < this.vertices.length ; i++){
            s += this.vertices[i] +  ' -> '
            var neighbors = this.adjlist.get(this.vertices[i])
            for(var j = 0 ; j < neighbors.length; j++){
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }

    initializeColor(){
        var color = []
        for(var i = 0 ; i < this.vertices.length; i++){
            color[this.vertices[i]] = 'white'
        }
        return color 
    }
}

var graph = new Graph()
var myVertices = ['A', 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I']
for(var i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i])
}

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("E", "I")

console.log(graph.toString())