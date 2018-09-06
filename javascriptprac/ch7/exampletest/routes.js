//Three approaches 
//Randomly go to each location then at some point all packages delivered
//One path that goes to each part of town, loop twice makes sure its all done
//A path search, search for shorest route

//finding shortest route
function findRoute(graph, from, to) {
    //initialize array of objects //pass variable from to "at" key
    let work = [{at: from, route: []}];
    //Loop through array of objects
    for (let i = 0; i < work.length; i++) {
    //deconstruct array of objects    
      let {at, route} = work[i];
      //pass location to graph (assume its an array of objects) (roadGraph)
      for (let place of graph[at]) {
          //if the index is the place we want to go to //add it to route (makes new array)
        if (place == to) return route.concat(place);
        //.some takes test function and returns true if found
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }