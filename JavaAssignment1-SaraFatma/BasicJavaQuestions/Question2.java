//Create a program to check if a number is even or odd.

import java.util.*;
class Question2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number to check if its even or odd: ");
        int number = sc.nextInt();

        if (number % 2 == 0){
            System.out.println("Number is even");
        }else{
            System.out.println("Number is odd");
        }

        sc.close();

    }
}