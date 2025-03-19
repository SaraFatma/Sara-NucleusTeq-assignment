abstract class Animal {
    protected String name;
    public Animal(String name) {
        this.name = name;
    }
    abstract void makeSound();
    public void display() {
        System.out.println("Animal Name: " + name);
    }
}
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

public class Abstraction{
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.display();
        myDog.makeSound();
    }
}
