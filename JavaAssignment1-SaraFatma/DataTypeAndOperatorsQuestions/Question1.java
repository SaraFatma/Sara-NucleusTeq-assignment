import java.util.*;
public class Question1 {
    public static void main(String[] args) {

        //Primitive data type
        int num = 10;

        System.out.println("primitive data type :"+num);
        
        //Non Primitive data type
        String name = "Sara Fatma";
        int[] numbers = {10, 20, 30, 40}; // Array reference
        Student student = new Student("Sara", 21); // Object reference

        System.out.println("Name: " + name);
        System.out.println("First number in array: " + numbers[0]);
        System.out.println("Student Name: " + student.getName());
    }
}

class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }
}