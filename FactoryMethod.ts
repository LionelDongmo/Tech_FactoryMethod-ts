/**
 * Dontsop L.L. Hermann Esiia 5A N 01
 * DONGMO Raymond Lionel IMTICIA 5 N 08
 */

class Creator {
    public anOperation(): string {
        
        const product = new ConcreteProduct();
       
        return product.operation();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct}';
    }
}

/**
 *PARTIE  Client 
 */
function clientCode(creator: Creator) {
    // ...
    // Appelle une méthode d'Operation depuis Creator 
    console.log(creator.anOperation());
    // ...
}

/**
 * appelle d'abord 
 */
clientCode(new Creator());

/**
 * La superclasse censée implémenter la méthode d'usine
 */
abstract class Creator1 {
    /**
     * Il peut avoir une implémentation par défaut de la méthode d'usine.
     */
    public abstract factoryMethod(): Product;

    public anOperation(): string {
        // Appelez la méthode de fabrique pour créer un objet Product.
        const product = this.factoryMethod();
        // Maintenant, utilisez le produit.
        return product.operation();
    }
}

/**
 * Les créateurs de béton remplacent la méthode d'usine
 */
// Un autre
class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

// Anotherbody
class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

interface Product {
    operation(): string;
}

/**
 * Les produits en béton fournissent diverses implémentations de l'interface du produit.
 */
class ConcreteProductA implements Product {
    public operation(): string {
        return 'ConcreteProductA';
    }
}

class ConcreteProductB implements Product {
    public operation(): string {
        return 'ConcreteProductB';
    }
}


/**
 * Le code client
 */
clientCode(new ConcreteCreatorA());

clientCode(new ConcreteCreatorB());