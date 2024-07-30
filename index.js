
//Establishing Variables
var arr = [];
var userInput = "";
var listInput = "";
var run = true;

while(run){
  //Current list displayed
  console.log("Current List:");
  console.log(arr);
  console.log("");
  
  //List Input
  console.log("1. Enter number list to be sorted.");
  
  //Sort
  console.log("2. Sort List");
  
  //Quit
  console.log("3. Quit");
  console.log("");
  
  //User Input 
  console.log("Choose option by inputing number atributed with the option you want")
  console.log("");
  
  userInput = prompt("Input ");
  
  //Functions:
  //List Input
  if(userInput == 1){
    console.clear();
    arr = [];
    
    console.log("Enter number list to be sorted. Include commas after each number except the final one. Example input: -2, 9, 3, -6, 5")
    console.log("");
    
    listInput = prompt("Input ");

    //Removing commas from string
    arr = listInput.split(',');
    //iterating through and triming any white space and parsing the values into integers 
    for(var j=0; j<arr.length; j++){
      arr[j] = parseInt(arr[j].trim());
    }

    console.clear();
  }

  //Sort
  else if(userInput == 2){
    console.clear();
    console.log("Sorted list:")
    console.log(quickSort(arr));
    console.log("------------------------------");
  }

  //Quit
  else if(userInput == 3){
    console.clear();
    console.log("Quit Succesful");
    run = false;
  }
}

//Overall sort function
  function quickSort(arr) {
    //exit to recursive function (base case)
    if(arr.length < 2){
      return arr;
    }
    //setting variables
    var anchor = arr[arr.length-1];
    var left = [];
    var right = [];
  
    //iterating through array and placing elements in left or right array when the element is less than or greater than the anchor respectivly
    for(var i=0; i<arr.length-1; i++){
      if(arr[i] < anchor){
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
    //using recursion to create the base array and then further sorting either side creating a binary tree.
    return[...quickSort(left), anchor, ...quickSort(right)];
    //"..." in this case is a spread operator that puts all values in "left" before the anchor and anything in "right" after the anchor in the base array and then keeps calling quicksort to further expand the binary tree all the while building a sorted array. 
  }