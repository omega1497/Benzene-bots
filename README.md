# Truck Platooning

Truck Platooning is linking of two or more trucks, that drive in a queue. This helps with reducing the air resistance experienced by the trucks at the back of the first truck and reduces the likelihood of being indulged in accidents.

This is a simple simulation of a **Truck Platooning** System.

## Use Case Diagram

![alt text](https://github.com/omega1497/Benzene-bots/blob/master/System%20Diagrams/Use%20Case%20Diagram.png?raw=true)

As illustrated by the use case diagram, A truck might join or leave the platoon, it then might get elected as the leader as well. Speed synchronization was another aspect that was kept in great consideration. The following sections emphasis more on how communication takes place or how speed synchronization was ensured.

## Election Algorithm

![alt text](https://github.com/omega1497/Benzene-bots/blob/master/System%20Diagrams/Election%20Algorithm.png?raw=true)

Nearest Neighbor is used as the algorithm to elect the new platoon leader. Initially, the first truck forming the platoon is declared as the platoon leader. For instance, there is a platoon with 5 trucks (1,2,3,4,5) and they are arranged in ascending order with TRUCK 1 being the first truck and TRUCK 5 being the last one. Initially, Truck 1 is the platoon leader, when Truck 1 leaves, truck 2 gets to be the leader. This is due to the fact that Truck 2 was the nearest neighbor to Truck 1. Incase Truck 2 and Truck 3 leaves the platoon, Truck 4 becomes the leader. The illustration above gives a better representation of the entire scenario.
