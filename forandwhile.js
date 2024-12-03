// print the elements of an array

function cars(){
    let cars_brands=["BMW(X5)","MINICOOPER(DOOR)","FORD(MUSTANG)","TOYOTA(SUPRA)","NISSAN(GTR)"];
    let car_names=0;
    while(car_names<5){
        console.log(`${cars_brands[car_names]}`);
        car_names++
    }
}
cars()

//  reverse the elements of an array

function vechile(){
    let cars_brands=["MARUTHI(SWIFT)","HONDA(AMAZE)","FORD(FIGO)","TOYOTA(INNOVA)","TATA(PUNCH)"];
    let car_names=4;
    while(car_names>-1){
        console.log(`${cars_brands[car_names]}`);
        car_names--;
    }
}
vechile()

// find the maximum numbers in an array

function marks(){
    let totals=[432,433,487,495,465];
    let max=totals[0];
    for(let first_mark=0;first_mark<totals.length;first_mark++){
        if(totals[first_mark]>max){
            max=totals[first_mark];
        }
          
    }
    console.log(` This is maximum mark ${max}`);

}
marks()

// find the minimum numbers in an array

function failmarks(){
    let totals=[432,433,487,495,465];
    let min=totals[0];
    for(let first_mark=4;first_mark>-1;first_mark--){
        if(totals[first_mark]<min){
            min=totals[first_mark];
        }
    }
    console.log(` This is maximum mark ${min}`);
}
failmarks()

// sum of the array values

function sumarrays(){
    let arr=[56,87,52,32,98,26];
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
      
        
    }
    console.log(`${sum}`);
}
sumarrays()