import java.util.*;

class Student {
    String name;
    int rollNumber;
    float marks;

    Student(String name, int rollNumber, float marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public void displayStudentDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

class GraduateStudent extends Student {   
    String course;

    GraduateStudent(String name, int rollNumber, float marks, String course) {
        super(name, rollNumber, marks);   
        this.course = course;
    }

    @Override
    public void displayStudentDetails() {   
        super.displayStudentDetails();   
        System.out.println("Course: " + course);
    }

    }

class Question2 {
    public static void main(String[] args) {
        GraduateStudent gradStudent = new GraduateStudent("Sara Fatma", 1, 97.5f, "AI & ML");
        gradStudent.displayStudentDetails();   
    }
}