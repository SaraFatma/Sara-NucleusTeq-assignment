//Write a program to find the average of elements in an array. 
import java.util.*;

public class Question1 {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

       System.out.println("Enter the number of elements in array");

       int n = sc.nextInt();

       int []arr = new int[n];

       int sum = 0;
       System.out.println("Enter the elements of array :");
       for(int i= 0; i<n ; i++){
        arr[i] = sc.nextInt();
        sum += arr[i];
       }

       float avg = (float) sum / n;

        System.out.println("Average of the elements: " + avg);
        
        sc.close();
    }
}