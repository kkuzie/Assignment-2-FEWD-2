// Create an application which iterates numbers from 1 to 100. 
// For multiples of 3, print "Marco!" instead of the number 
// and for multiples of 5, print "Polo!" instead of the number. 
// For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 
// This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.

let i;

for (i = 1; i <= 100; i++) {
    if (i % 3 && i % 5) { 
        window.document.write(i);
    } else {
        if (i % 3 === 0) {
            window.document.write("Marco!");
        }
        if (i % 5 === 0) {
            window.document.write("Polo!");
        }
    }
    window.document.write("<br>")
}
        

