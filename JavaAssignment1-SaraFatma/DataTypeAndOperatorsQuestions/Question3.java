import java.util.*;

public class Question3 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Temperature Converter");
        System.out.println("1: Celsius to Fahrenheit");
        System.out.println("2: Fahrenheit to Celsius");
        System.out.print("Choose an option (1 or 2): ");
        int choice = sc.nextInt();
        
        if (choice == 1) {
            System.out.print("Enter temperature in Celsius: ");
            float celsius = sc.nextFloat();
            float fahrenheit = (celsius * 9/5) + 32;
            System.out.println("Temperature in Fahrenheit: " + fahrenheit);
        } else if (choice == 2) {
            System.out.print("Enter temperature in Fahrenheit: ");
            float fahrenheit = sc.nextFloat();
            float celsius = (fahrenheit - 32) * 5/9;
            System.out.println("Temperature in Celsius: " + celsius);
        } else {
            System.out.println("Invalid choice!");
        }
        
        sc.close();
    }
}
