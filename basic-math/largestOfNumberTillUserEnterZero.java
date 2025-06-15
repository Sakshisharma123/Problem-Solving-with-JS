import java.util.*;
class largestOfNumberTillUserEnterZero  {
    public static void main(String[] args) {
       Scanner scn = new Scanner(System.in);
       System.out.print("Enter the number: ");
       int largest = 1;
       while(true){
           int num = scn.nextInt();
           if(num > 0){
            if(largest < num){
                largest = num;
            }
           }
           else{
               break;
           }
       }
       scn.close();
       System.out.print("Largest: " +largest);
    }
}