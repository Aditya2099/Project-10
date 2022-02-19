function setup() {
  createCanvas(400, 400);
  marks_avg()
}

function draw() {
  background(220);
}
 function marks_avg(){
  var marks =[30,35,45,48,40];
  var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avg = sum/marks.length
  console.log(marks[4])
  console.log(sum)
  console.log(avg)
 }