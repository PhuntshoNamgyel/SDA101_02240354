class MyCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Container for the card
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Image Header
        const image = document.createElement('img');
        image.setAttribute('class', 'card-image');

        // Array of image URLs and corresponding texts
        const heroes = {
            'images/Argus.jpg': {
                name: "Argus",
                quote: '"Immortality or death!"'
            },
            'images/Brody.jpg': {
                name: "Brody",
                quote: '"To forget is to forgive."'
            },
            'images/Chou.jpg': {
                name: "Chou",
                quote: '"The man who can beat me has not been born yet"'
            },
            'images/Gatotkaca.jpg': {
                name: "Gatotkaca",
                quote: '"Muscle of iron, bones of steel."'
            },
            'images/Hanzo.jpg': {
                name: "Hanzo",
                quote: '"Hahaha, the strongest ninja has arrived."'
            },
            'images/Martis.jpg': {
                name: "Martis",
                quote: '"Three thousand worlds, and not a single worthy foe!"'
            },
            'images/Moskov.jpg': {
                name: "Moskov",
                quote: '"The spear of destiny spares no one."'
            },
            'images/Selena.jpg': {
                name: "Selena",
                quote: '"Shhh... When you gaze into the abyss, the abyss gazes back."'
            }
        };

        // Select a random hero
        const heroImages = Object.keys(heroes);
        const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
        image.src = randomImage; // Use the randomly selected image
        image.alt = heroes[randomImage].name; // Set alt text to hero name
        card.appendChild(image);

        // Header (Hero Name)
        const header = document.createElement('div');
        header.setAttribute('class', 'header');
        header.innerText = heroes[randomImage].name; // Display hero name
        card.appendChild(header);

        // Content section (Hero Quote)
        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        content.innerText = heroes[randomImage].quote; // Display hero's quote
        card.appendChild(content);

        // Footer without icon
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');
        footer.innerText = this.getAttribute('footer') || 'Default Footer'; // Optional footer text
        card.appendChild(footer);

        // Append card to shadow root
        shadow.appendChild(card);

        // Style element
        const style = document.createElement('style');
        style.textContent = `
            .card {
                background: var(--card-background, #ffffff);
                border: 1px solid var(--card-border-color, #ddd);
                border-radius: var(--card-radius, 8px);
                box-shadow: var(--card-shadow, rgba(0, 0, 0, 0.1) 0px 4px 8px);
                overflow: hidden;
                max-width: 320px;
                width: 100%;
                transition: transform 0.3s, box-shadow 0.3s;
                display: flex;
                flex-direction: column;
            }
            .card:hover {
                transform: scale(1.02);
                box-shadow: var(--card-shadow-hover, rgba(0, 0, 0, 0.2) 0px 8px 16px);
            }
            .card-image {
                width: 100%;
                height: auto;
                display: block;
            }
            .header {
                color: var(--header-color, #333);
                font-size: 1.5em;
                font-weight: bold;
                padding: 16px;
                background: var(--header-background, #f7f7f7);
                border-bottom: 1px solid var(--card-border-color, #ddd);
                text-align: center;
            }
            .content {
                color: var(--content-color, #DC143C);
                padding: 16px;
                text-align: center;
            }
            .footer {
                color: var(--footer-color, #333);
                font-size: 0.9em;
                padding: 12px 16px;
                background: var(--footer-background, #f7f7f7);
                text-align: center;
                border-top: 1px solid var(--card-border-color, #ddd);
            }
        `;
        shadow.appendChild(style);
    }
}

// Define the custom element
customElements.define('my-card', MyCard);
