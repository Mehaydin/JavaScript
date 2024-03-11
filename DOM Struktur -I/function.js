
// Navbar'ı render et
function renderNav() {
  return `
        <nav>
            <ul>
                <li><a href="#">HiShoppers</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    `;

}

// ürün verisi
const products = [
  {
      name: "iFruit Vision Pro",
      image: "https://www.apple.com/v/apple-vision-pro/b/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg",
      description: "This is a great product for your needs.",
      price: "$9999"
  },
  {
      name: "very smart phone galaxy 39",
      image: "https://i0.wp.com/price.zoombangla.com/wp-content/uploads/2022/12/download-86-262x192.jpg",
      description: "Description of Product 2. Get the best value with this product.",
      price: "$123"
  },
  {
      name: "earphone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFjPfjbspUiNHbDYOHHiOoWrELOcJdZ5wXg&usqp=CAU",
      description: "The perfect solution for your requirements.",
      price: "$230"
  }
];

// İçeriği render et (Dinamik)
function renderContent() {
  return `
    <div class="container"> 
        ${products.map(product => `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" >
                <div class="card-body">
                    <h4><b>${product.name}</b></h4> 
                    <p class="card-text">${product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        `).join('')}
    </div>
  `;
}


// Footer'ı render et
function renderFooter() {
  return `
    <footer>
        © HiShoppers. All rights reserved
    </footer>
  `;
}

// Tüm Fonksiyonların Render'ı-DOM
export function renderApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
        ${renderNav()}
        ${renderContent()}
        ${renderFooter()}
    `;
}
