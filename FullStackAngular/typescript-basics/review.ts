let reviews : number[] = [ 4, 5.5, 4.9, 6.2, 7];

let total : number = 0;

for(let i=0;i<reviews.length;i++){
    console.log(reviews[i])
    total += reviews[i];
}

let average : number = total/reviews.length;

console.log("Average review is :"+average);

//simplified for loo p
for(let review of reviews){
    console.log(review)
}