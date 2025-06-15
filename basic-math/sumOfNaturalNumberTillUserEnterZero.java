import java.util.*;

class SumOfNaturalNumberTillUserEnterZero{
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int sum = 0;
        while (true) {
            int num = scn.nextInt();
            if (num > 0) {
                sum = sum + num;
            } else {
                break;
            }
        }
        System.out.print("Sum: " + sum);
        scn.close();
    }
}