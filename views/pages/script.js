var characterCards = [{name: "Rhodry Maelwaedd", 
                        description: "Rhodry is a key character in the Deverry storyline…oble, but through fate has become a Silverdagger.", 
                        image: "img/Characters/rhodry_maelwaed.png"},
                    {name: "Gilyan",
                    description: "Gilyan is a strong sorceress who is closely tied to Rhodry in many ways.",
                    image: "img/Characters/gilyan.jpg",
                    },
                    {name: "Nevyn",
                    description: "One of the most powerful sorcerers that has ever existed. Also called the 'Master of the Ether'.",
                    image: "img/Characters/nevyn.jpg",
                    },
                    {name: "",
                    description: "",
                    image: "",
                    },
                    {name: "",
                    description: "",
                    image: "",
                    },
                    {name: "",
                    description: "",
                    image: "",
                    },
                    {name: "",
                    description: "",
                    image: "",
                    },
                ];

class character {
    constructor(name,description,image) {
        this.name = name
        this.description = description
        this.image = image
        characterCards.push(this)
    }
};

function refreshcards() {
    characterCards.forEach(element => {
        var imgdiv = '<img class="card-img-top" src="' + element.image + '" alt="Card image cap">'
        var namediv = '<h5 class="card-title">' + element.name + '</h5>'
        var desdiv = '<p class="card-text">' + element.description + '</p>'
        $('.card-columns').append('<div class="card">' + imgdiv + '<div class="card-body"> ' + namediv + desdiv + '</div>' + '</div>')
    });
}

refreshcards();