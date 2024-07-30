


    // Adding CSS styles
    const style = document.createElement('style');
    style.textContent = `
        #bookshelf-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 15px;
            padding: 10px;
        }
        a {
            color: #96588a;
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 100%;
            border-radius: 5px;
        }
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .book {
            text-align: center;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .book img {
            width: 140px !important;
            height: 200px !important;
            border-bottom: 1px solid #000;
            margin-bottom: 3px;
            border-radius: 5px;
        }
        h1 {
            text-align: center;
            margin: 20px 0;
        }
    `;
    document.head.append(style);

    (function() {
        function createBookElement(book) {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');

            const coverImg = document.createElement('img');
            const coverUrl = book.cover && book.cover.url ? book.cover.url : 'default-cover-url.jpg'; // Default cover image if not available
            coverImg.src = coverUrl;
            coverImg.alt = book.name;

            const title = document.createElement('h3');
            title.innerText = book.name;

            const link = document.createElement('a');
            link.href = `/books/${book.slug}`;
            link.appendChild(coverImg);
            link.appendChild(title);

            bookElement.appendChild(link);

            return bookElement;
        }

        function loadShelf(shelfId) {
            const url = `https://books.simplyjane.me/api/shelves/${shelfId}`;
            console.log('Fetching data from:', url);

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Data received:', data);
                    const shelfContainer = document.getElementById('bookshelf-container');
                    const shelfName = document.getElementById('shelf-name');
                    shelfContainer.innerHTML = ''; // Clear previous content
                    shelfName.innerText = data.name; // Set shelf name

                    if (data.books && data.books.length > 0) {
                        data.books.forEach(book => {
                            // Fetch additional book details to get the cover URL
                            fetch(`https://books.simplyjane.me/api/books/${book.id}`)
                                .then(response => response.json())
                                .then(bookDetails => {
                                    const bookElement = createBookElement(bookDetails);
                                    shelfContainer.appendChild(bookElement);
                                })
                                .catch(error => console.error('Error fetching book details:', error));
                        });
                    } else {
                        shelfContainer.innerHTML = '<p>No books found in this shelf.</p>';
                    }
                })
                .catch(error => {
                    console.error('Error fetching shelf data:', error);
                });
        }

        document.addEventListener('DOMContentLoaded', function() {
            const shelfId = '5'; // Using shelf ID 5
            loadShelf(shelfId);
        });
    })();






   
                
                 
                 
            
            
    

