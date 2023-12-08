// This pulls in the file system module
const fs = require('fs');

// this creates a class for one of my shapes, circle, and then draws the parameters of the shape
class Circle {
    constructor(color){
        this.color = color
    }

    draw(){
        return `<circle cx="100" cy="85" r="50" fill="${this.color}" />`
        
    }
}

// this creates a class for one of my shapes, square, and then draws the parameters of the shape
class Square {
    constructor(color){
        this.color = color;
    }
    draw(){
        return `<rect x="50" y="35" width="100" height="100" fill="${this.color}" />`
    }
}

// this creates a class for one of my shapes, triangle, and then draws the parameters of the shape
class Triangle {
    constructor(color){
        this.color = color;
    }
    draw(){
        return `<polygon points="0,200 100,0 200,200" fill="${this.color}" />`
        
    }
}

// this function is for the logo and specifies that it should have color, shape, text, and shape color as referenced in the index.js file
function logo(text, color, shapes, ShapeColor){
    console.log(shapes);
    const width = 200;
    const height = 200;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`

    // this sets some parameters for the shape, I console logged them because I was having some issues figuring out which shape was broken. They should all work now, I added the "break" feature which works like return
    let shape;
    switch (shapes) {
        case 'circle':
            console.log("in Circle")
            shape = new Circle(ShapeColor);
            break;
        case 'square':
            console.log("in Square")
            shape = new Square(ShapeColor)
            break;
        case 'triangle':
            console.log("in Triangle")
            shape = new Triangle(ShapeColor);
            break;
        default:
            console.log("Something went wrong!")
            break;
    }

    svg += shape.draw();
    svg += `<text x="80" y="80" fill="${color}"> ${text}</text></svg>`

    // this is Write File command, my tutor recommended I add the Sync, but I cannot quite remember why I added, but I know that just WriteFile was not working
    fs.writeFileSync('logo.svg', svg);

}

module.exports = logo;