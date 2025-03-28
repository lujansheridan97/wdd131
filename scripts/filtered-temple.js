document.addEventListener('DOMContentLoaded', () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-1029758-wallpaper.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52892,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-1028323-wallpaper.jpg"
        },
        {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
            dedicated: "1985, August, 24",
            area: 19000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-144795-wallpaper.jpg"
        }
    ];

    const templeCardsContainer = document.getElementById('temple-cards-container');
    const menuItems = document.querySelectorAll('nav ul li a');

    function displayTemples(filteredTemples) {
        templeCardsContainer.innerHTML = ''; // Clear existing temple cards
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');
            
            templeCard.innerHTML = `
                <h4>${temple.templeName}</h4>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedication Date:</strong> ${temple.dedicated}</p>
                <p><strong>Total Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            templeCardsContainer.appendChild(templeCard);
        });
    }

    // Filter temples by various categories
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.textContent.trim().toLowerCase();

            let filteredTemples = [];

            if (category === 'old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (category === 'new') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            } else if (category === 'large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (category === 'small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            } else if (category === 'home') {
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);
        });
    });

    // Display all temples initially
    displayTemples(temples);
});
