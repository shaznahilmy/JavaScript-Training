/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

class HikeBag extends Backpack{
    constructor(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen, hikingType, backpackingType){
        super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
        this.hikingType = hikingType;
        this.backpackingType = backpackingType;
    }
    toggleLid(lidStatus){
        super.toggleLid(lidStatus);
        if(lidStatus){
            console.log("Your lid is open")

        }
        else{
            console.log("Your lid is closed");
        }
    }

};

const hikingBag = new HikeBag("Hiking Bag", 10, "Black", 4, 18, 18, false, "Trail", "Standard");
console.log(hikingBag);