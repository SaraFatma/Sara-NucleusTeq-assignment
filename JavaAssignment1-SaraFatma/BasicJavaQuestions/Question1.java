// Write a program to calculate the area of a circle, rectangle, or triangle based on user input.

import java.util.*;
class Question1{
    public static void main(String []args){
        
        Scanner sc = new Scanner(System.in);
    
        System.out.println("Choose the shape to calculate area:");
        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");
        System.out.print("Enter your choice (1/2/3): ");
        
        int choice = sc.nextInt();

       switch (choice) {
            case 1:
                System.out.print("Enter the radius of the circle: ");
                float radius = sc.nextFloat();
                float circleArea = 3.14f * radius * radius;
                System.out.println("Area of the circle:"+ circleArea);
                break;

            case 2:
                System.out.print("Enter the length of the rectangle: ");
                float length = sc.nextFloat();
                System.out.print("Enter the width of the rectangle: ");
                float width = sc.nextFloat();
                float rectangleArea = length * width;
                System.out.println("Area of the rectangle: "+ rectangleArea);
                break;

            case 3:
                System.out.print("Enter the base of the triangle: ");
                float base = sc.nextFloat();
                System.out.print("Enter the height of the triangle: ");
                float height = sc.nextFloat();
                float triangleArea = 0.5f * base * height;
                System.out.println("Area of the triangle: "+ triangleArea);
                break;

            default:
                System.out.println("Invalid choice. Please select 1, 2, or 3.");
        }

        sc.close();

    }
}