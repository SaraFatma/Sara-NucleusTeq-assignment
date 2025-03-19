// Demonstrate polymorphism by creating methods with the same name but different parameters in a parent and child class.
import java.util.*;

class PetOwner {
    String name;
    int age;

    PetOwner(String name, int age){
      this.name = name;
      this.age= age;
    }

    public void display(){
       
        System.out.println("Name of the owner:" + name);
        System.out.println("age of the owner:" + age);
        System.out.println(" ");

    }
    public void display(String messgae){
        System.out.println(messgae + ":");
        System.out.println(" ");
        System.out.println("Name of the owner:" + name);
        System.out.println("age of the owner:" + age);
        System.out.println(" ");

    }
}

class Pet extends PetOwner {
    
    String petName;
    int petAge;

    Pet(String ownerName, int ownerAge, String petName, int petAge) {
        super(ownerName, ownerAge);   
        this.petName = petName;
        this.petAge = petAge;
    }

    @Override
    public void display(){
      
        System.out.println("Name of the owner:" + name);
        System.out.println("age of the owner:" + age);
        System.out.println("Name of the pet:" + petName);
        System.out.println("age of the pet:" + petAge);
       
    }

    public void display(String messgae){
        System.out.println(messgae + ":");
        System.out.println(" ");
        System.out.println("Name of the owner:" + name);
        System.out.println("age of the owner:" + age);
        System.out.println("Name of the pet:" + petName);
        System.out.println("age of the pet:" + petAge);
       
    }
}

public class Question3 {
    public static void main(String[] args) {
         
         PetOwner ownerObj1 = new PetOwner("John", 25);
         ownerObj1.display("Overloading display() in class PetOwner");
         
         System.out.println("After Overriding display() method in Pet class");
        System.out.println(" ");

         Pet petObj1 = new Pet("John", 25, "Buddy", 2);
         petObj1.display("Overloading Display() method in Pet class");
    }
}
