// Use this editor to write, compile and run your Java code online
import java.util.*;
class averageOfNNumbers {
    public static void main(String[] args) {
       Scanner scn = new Scanner(System.in);
       int sum = 0;
       int count = 0;
       
       System.out.print("Enter Numbers:");
       
       while(true){
           int num = scn.nextInt();
           if(num > 0){
               sum = sum + num;
           }
           else{
               break;
           }
           count++;
       }
       int avg = sum / count;
       System.out.print("Average of Numbers:"+ avg);

       scn.close();
    }
}