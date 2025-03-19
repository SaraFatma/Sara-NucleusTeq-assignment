// Implement a program to find the factorial of a given number.
import java.util.*;


public class Question3 {
   
    public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         
         System.out.print("Enter a number whose factorial is to be printed: ");
         int number = sc.nextInt();
         long factorial = 1;

         for(int i = 1; i <= number; i++){
            factorial = factorial * i;
         }

         System.out.println("Factorial of " + number + " is " + factorial);
         sc.close();
    }  
}
