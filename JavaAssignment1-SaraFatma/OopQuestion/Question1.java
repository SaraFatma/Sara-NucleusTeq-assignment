//Create a class to represent a student with attributes like name, roll number, and marks.

import java.util.*;
class Student{

    String name;
    int rollNumber;
    float marks;


    public Student(String name, int rollNumber, float marks){
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public void displayStudentDetails(){
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}
public class Question1 {
    public static void main(String[] args) {
      Student studentObj = new Student("Sara Fatma",1,97.5f);
      studentObj.displayStudentDetails();
    }
}

