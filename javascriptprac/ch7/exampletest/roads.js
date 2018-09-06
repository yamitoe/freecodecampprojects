//Our array
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  //notes graph can simply be replaced with an empty object, they 
  //literally acheive the same thing
/*roadGraph
  Alice's House:	["Bob's House", "Cabin", "Post Office"]
Bob's House:	["Alice's House", "Town Hall"]
Cabin:	["Alice's House"]
Post Office:	["Alice's House", "Marketplace"]
Town Hall:	["Bob's House", "Daria's House", …]
Daria's House:	["Ernie's House", "Town Hall"]
Ernie's House:	["Daria's House", "Grete's House"]
Grete's House:	["Ernie's House", "Farm", "Shop"]
Farm:	["Grete's House", "Marketplace"]
Shop:	["Grete's House", "Marketplace", …]
Marketplace:	["Farm", "Post Office", "Shop", …]
*/

