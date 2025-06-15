import java.util.*;

class sumOfALlNUmberTillUserEnterZero {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter a list of numbers:");
        int sumOfNegativeNumbers = 0;
        int sumOfPositiveEvenNumbers = 0;
        int sumOfPositiveOddNumbers = 0;

        while (true) {
            int num = scn.nextInt();
            if (num < 0) {
                sumOfNegativeNumbers = sumOfNegativeNumbers + num;
            }
            if (num % 2 == 0) {
                sumOfPositiveEvenNumbers = sumOfPositiveEvenNumbers + num;
            }
            if ((num % 2 != 0) && num > 0) {
                sumOfPositiveOddNumbers = sumOfPositiveOddNumbers + num;
            }
            if (num == 0) {
                break;
            }
        }
        System.out.println("Sum of Negative Numbers: " + sumOfNegativeNumbers);
        System.out.println("Sum of  Positive Even Numbers: " + sumOfPositiveEvenNumbers);
        System.out.println("Sum of Positive Odd Numbers: " + sumOfPositiveOddNumbers);

        scn.close();
    }

}
