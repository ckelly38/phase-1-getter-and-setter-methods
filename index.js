// Add your Circle class here
class Circle{
    constructor(radi)
    {
        if (radi < 0) throw "illegal value found and used for the radius!";
        this.radius = radi;
    }

    get diameter()
    {
        return 2 * this.radius;
    }

    set diameter(newdiam)
    {
        if (newdiam < 0) throw "illegal value found and used for the new radius!";
        this.radius = newdiam / 2;
    }

    get area()
    {
        return Math.PI * this.radius * this.radius;
    }

    set area(nwarea)
    {
        if (nwarea < 0) throw "illegal value found and used for the new radius!";
        this.radius = Math.sqrt(nwarea / Math.PI);
    }

    get circumference()
    {
        return Math.PI * this.diameter;
    }

    set circumference(nwcirc)
    {
        this.diameter = (nwcirc / Math.PI);
    }
}