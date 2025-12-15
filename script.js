        // Initialize Shopping Cart
        let shoppingCart = [];
        let cartTotal = 0;
        let rainbowInterval = null;
        let gradientInterval = null;
        let currentArProduct = null;

        // Product Database - German - EXPANDED TO 12 PRODUCTS
        const products = [
            {
                id: 1,
                name: "Quantum Glas Handy",
                category: "SMARTPHONE",
                price: 1499.99,
                description: "Transparentes Flüssigkeitsdisplay mit Quantenverarbeitung und holografischer Schnittstelle",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                name: "Liquid Crystal Laptop",
                category: "LAPTOP",
                price: 2999.99,
                description: "Formveränderndes Flüssigkristalldisplay mit Quantencomputing",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                name: "Smart Liquid Uhr",
                category: "WEARABLE",
                price: 799.99,
                description: "Adaptive Flüssigmetall-Smartwatch mit Gesundheitsüberwachung",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                name: "Holografische Lautsprecher",
                category: "AUDIO",
                price: 1299.99,
                description: "Schwebende holografische Lautsprecher mit 3D-Soundprojektion",
                image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                name: "Neurale Interface Brille",
                category: "AR/VR",
                price: 899.99,
                description: "Direkte neurale AR-Brille mit Flüssiglinsentechnologie",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                name: "Liquid Gaming System",
                category: "GAMING",
                price: 3999.99,
                description: "Flüssigkeitsgekühlter Gaming-PC mit holografischer Leistungsanzeige",
                image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            // NEW PRODUCTS ADDED
            {
                id: 7,
                name: "CryoFlow Kühlpad",
                category: "COOLING",
                price: 299.99,
                description: "Aktives Kryo-Kühlsystem mit flüssigem Stickstoff für ultimative Performance",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                name: "HoloVision Projektor",
                category: "PROJECTION",
                price: 899.99,
                description: "True 3D Hologramm-Projektor mit räumlicher Erkennung",
                image: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 9,
                name: "Quantum Tastatur",
                category: "PERIPHERAL",
                price: 499.99,
                description: "Adaptive Flüssigtastatur mit haptischem Feedback und Formgedächtnis",
                image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 10,
                name: "Neuraler Prozessor Chip",
                category: "COMPONENT",
                price: 1999.99,
                description: "Quanten-Neuralprozessor mit Flüssigkühlinterface",
                image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 11,
                name: "Smart Glass Fenster",
                category: "SMART HOME",
                price: 2499.99,
                description: "Elektrochromes Smart-Glass mit Flüssigkristall-Display",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 12,
                name: "Liquid Audio System",
                category: "AUDIO",
                price: 1599.99,
                description: "Surround-Soundsystem mit flüssigen Lautsprechermembranen",
                image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Create liquid droplets
        function createDroplets() {
            const container = document.getElementById('droplets');
            container.innerHTML = '';
            
            for (let i = 0; i < 30; i++) {
                const droplet = document.createElement('div');
                droplet.className = 'droplet';
                
                const size = Math.random() * 100 + 50;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 10;
                
                droplet.style.width = `${size}px`;
                droplet.style.height = `${size}px`;
                droplet.style.left = `${left}%`;
                droplet.style.top = `${top}%`;
                droplet.style.animationDelay = `${delay}s`;
                droplet.style.animationDuration = `${duration}s`;
                
                container.appendChild(droplet);
            }
        }

        // Update all CSS variables for glass effects
        function updateGlassVariables() {
            const root = document.documentElement;
            
            // Get current values
            const glassBlur = getComputedStyle(root).getPropertyValue('--glass-blur');
            const glassOpacity = getComputedStyle(root).getPropertyValue('--glass-opacity');
            
            // Update all glass elements with new values
            root.style.setProperty('--glass-bg', `rgba(255, 255, 255, ${glassOpacity})`);
            root.style.setProperty('--glass-border', `rgba(255, 255, 255, ${parseFloat(glassOpacity) * 2})`);
            
            // Update all glass elements
            updateAllGlassElements();
        }

        // Apply glass effects to all elements
        function updateAllGlassElements() {
            const glassBlur = getComputedStyle(document.documentElement).getPropertyValue('--glass-blur').trim();
            
            // Update all glass elements
            const glassElements = [
                '.liquid-nav',
                '.shopping-cart',
                '.color-selector',
                '.glass-controls',
                '.control-panel',
                '.hero',
                '.product-card',
                '.cart-item'
            ];
            
            glassElements.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.backdropFilter = `blur(${glassBlur})`;
                    el.style.webkitBackdropFilter = `blur(${glassBlur})`;
                });
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createDroplets();
            loadProducts();
            updateCartDisplay();
            setupEventListeners();
            updateGlassVariables();
        });

        function loadProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="ar-preview-btn" data-id="${product.id}" data-name="${product.name}">
                            <i class="fas fa-vr-cardboard"></i>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function setupEventListeners() {
            // Cart toggle
            document.getElementById('cartButton').addEventListener('click', openCart);
            document.getElementById('cartOverlay').addEventListener('click', closeCart);
            document.getElementById('closeCart').addEventListener('click', closeCart);
            
            // Color selector toggle
            document.getElementById('colorButton').addEventListener('click', function() {
                document.getElementById('colorSelector').classList.toggle('active');
            });
            
            document.getElementById('colorControl').addEventListener('click', function() {
                document.getElementById('colorSelector').classList.toggle('active');
            });
            
            // Color selection
            document.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    
                    const color = this.dataset.color;
                    const name = this.dataset.name;
                    const rgb = this.dataset.rgb;
                    
                    if (color === 'rainbow') {
                        startRainbowEffect();
                    } else if (color === 'gradient') {
                        startGradientEffect();
                    } else {
                        stopColorEffects();
                        setThemeColor(color, rgb, name);
                    }
                });
            });
            
            // AR Preview
            document.addEventListener('click', function(e) {
                // Add to cart button
                if (e.target.closest('.add-to-cart')) {
                    const btn = e.target.closest('.add-to-cart');
                    const productId = parseInt(btn.dataset.id);
                    addToCart(productId, btn);
                }
                
                // AR Preview button
                if (e.target.closest('.ar-preview-btn')) {
                    const btn = e.target.closest('.ar-preview-btn');
                    const productId = parseInt(btn.dataset.id);
                    const productName = btn.dataset.name;
                    openArPreview(productId, productName);
                }
                
                // Remove from cart
                if (e.target.closest('.remove-item')) {
                    const btn = e.target.closest('.remove-item');
                    const productId = parseInt(btn.dataset.id);
                    removeFromCart(productId);
                }
                
                // Quantity controls
                if (e.target.closest('.quantity-minus')) {
                    const btn = e.target.closest('.quantity-minus');
                    const productId = parseInt(btn.dataset.id);
                    updateQuantity(productId, -1);
                }
                
                if (e.target.closest('.quantity-plus')) {
                    const btn = e.target.closest('.quantity-plus');
                    const productId = parseInt(btn.dataset.id);
                    updateQuantity(productId, 1);
                }
            });
            
            // AR Controls
            document.getElementById('closeAr').addEventListener('click', closeArPreview);
            document.getElementById('arOverlay').addEventListener('click', closeArPreview);
            
            document.getElementById('arPlace').addEventListener('click', function() {
                document.getElementById('arInstructions').textContent = 'Move your device to place the product in your space';
            });
            
            document.getElementById('arRotate').addEventListener('click', function() {
                document.getElementById('arInstructions').textContent = 'Pinch or drag to rotate the 3D model';
            });
            
            document.getElementById('arScale').addEventListener('click', function() {
                document.getElementById('arInstructions').textContent = 'Use two fingers to scale the product to fit your space';
            });
            
            // Checkout
            document.getElementById('checkoutBtn').addEventListener('click', checkout);
            
            // Font controls
            document.getElementById('fontIncrease').addEventListener('click', function() {
                let scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-scale'));
                scale = Math.min(scale + 0.1, 1.5);
                document.documentElement.style.setProperty('--font-scale', scale);
            });
            
            document.getElementById('fontDecrease').addEventListener('click', function() {
                let scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-scale'));
                scale = Math.max(scale - 0.1, 0.8);
                document.documentElement.style.setProperty('--font-scale', scale);
            });
            
            // Glass controls - FIXED: changed min from 5 to 0
            const blurSlider = document.getElementById('blurSlider');
            const transparencySlider = document.getElementById('transparencySlider');
            const liquidSlider = document.getElementById('liquidSlider');
            
            blurSlider.addEventListener('input', function() {
                const value = this.value;
                document.getElementById('blurValue').textContent = value + 'px';
                document.documentElement.style.setProperty('--glass-blur', value + 'px');
                updateGlassVariables();
            });
            
            transparencySlider.addEventListener('input', function() {
                const value = this.value;
                const percent = Math.round(value * 100);
                document.getElementById('transparencyValue').textContent = percent + '%';
                document.documentElement.style.setProperty('--glass-opacity', value);
                updateGlassVariables();
            });
            
            liquidSlider.addEventListener('input', function() {
                const value = parseFloat(this.value);
                document.getElementById('liquidValue').textContent = 
                    value <= 0.3 ? 'Leicht (' + value + ')' : 
                    value <= 0.7 ? 'Mittel (' + value + ')' : 
                    'Stark (' + value + ')';
                document.documentElement.style.setProperty('--liquid-intensity', value);
                createDroplets();
            });
            
            // Navigation
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Close color selector when clicking outside
            document.addEventListener('click', function(e) {
                const colorSelector = document.getElementById('colorSelector');
                const colorButton = document.getElementById('colorButton');
                const colorControl = document.getElementById('colorControl');
                
                if (!colorSelector.contains(e.target) && 
                    !colorButton.contains(e.target) && 
                    !colorControl.contains(e.target)) {
                    colorSelector.classList.remove('active');
                }
            });
            
            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeCart();
                    closeArPreview();
                    document.getElementById('colorSelector').classList.remove('active');
                }
                if (e.key === 'c' || e.key === 'C') openCart();
            });
        }

        function openArPreview(productId, productName) {
            currentArProduct = products.find(p => p.id === productId);
            document.getElementById('arInstructions').textContent = `View ${productName} in your space using augmented reality`;
            document.getElementById('arOverlay').classList.add('active');
            document.getElementById('arPreview').classList.add('active');
        }

        function closeArPreview() {
            document.getElementById('arOverlay').classList.remove('active');
            document.getElementById('arPreview').classList.remove('active');
        }

        // Set theme color function
        function setThemeColor(color, rgb, name) {
            const root = document.documentElement;
            
            // Set primary color
            root.style.setProperty('--primary-color', color);
            root.style.setProperty('--primary-rgb', rgb);
            
            // Update droplets with new color
            document.querySelectorAll('.droplet').forEach(droplet => {
                droplet.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${color}80, transparent 70%)`;
            });
            
            // Update water layer with new colors
            const waterLayer = document.querySelector('.water-layer');
            if (waterLayer) {
                waterLayer.style.background = 
                    `radial-gradient(circle at 30% 30%, rgba(${rgb}, 0.15) 0%, transparent 50%),
                     radial-gradient(circle at 70% 70%, rgba(0, 187, 249, 0.10) 0%, transparent 50%),
                     radial-gradient(circle at 50% 20%, rgba(131, 56, 236, 0.08) 0%, transparent 50%)`;
            }
        }

        function startRainbowEffect() {
            stopColorEffects();
            
            let hue = 0;
            rainbowInterval = setInterval(() => {
                hue = (hue + 1) % 360;
                const color = `hsl(${hue}, 100%, 50%)`;
                const rgb = `${hue * 255 / 360}, 255, 128`;
                
                setThemeColor(color, rgb, 'Regenbogen');
            }, 50);
        }

        function startGradientEffect() {
            stopColorEffects();
            
            let gradientOffset = 0;
            gradientInterval = setInterval(() => {
                gradientOffset = (gradientOffset + 1) % 360;
                const color1 = `hsl(${gradientOffset}, 100%, 50%)`;
                const color2 = `hsl(${(gradientOffset + 120) % 360}, 100%, 50%)`;
                const color3 = `hsl(${(gradientOffset + 240) % 360}, 100%, 50%)`;
                
                const root = document.documentElement;
                root.style.setProperty('--primary-color', color1);
                
                document.querySelectorAll('.droplet').forEach(droplet => {
                    droplet.style.background = `radial-gradient(circle at 30% 30%, ${color1}, ${color2}, ${color3}80, transparent 70%)`;
                });
            }, 100);
        }

        function stopColorEffects() {
            if (rainbowInterval) {
                clearInterval(rainbowInterval);
                rainbowInterval = null;
            }
            if (gradientInterval) {
                clearInterval(gradientInterval);
                gradientInterval = null;
            }
        }

        function addToCart(productId, button) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = shoppingCart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                shoppingCart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            createLiquidAnimation(button);
            updateCartDisplay();
            
            const cartIcon = document.getElementById('cartButton');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 300);
        }

        function createLiquidAnimation(button) {
            const rect = button.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            const cartIcon = document.getElementById('cartButton');
            const cartRect = cartIcon.getBoundingClientRect();
            const endX = cartRect.left + cartRect.width / 2;
            const endY = cartRect.top + cartRect.height / 2;
            
            const droplet = document.createElement('div');
            droplet.style.position = 'fixed';
            droplet.style.left = startX + 'px';
            droplet.style.top = startY + 'px';
            droplet.style.width = '35px';
            droplet.style.height = '35px';
            droplet.style.background = `radial-gradient(circle at center, var(--primary-color), var(--primary-color)80, transparent)`;
            droplet.style.borderRadius = '50%';
            droplet.style.zIndex = '10000';
            droplet.style.pointerEvents = 'none';
            droplet.style.boxShadow = '0 0 25px var(--primary-color), 0 0 40px var(--primary-color)';
            
            document.body.appendChild(droplet);
            
            const animation = droplet.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.7)`,
                    opacity: 0.7
                },
                {
                    transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            
            animation.onfinish = () => droplet.remove();
        }

        function removeFromCart(productId) {
            shoppingCart = shoppingCart.filter(item => item.id !== productId);
            updateCartDisplay();
        }

        function updateQuantity(productId, change) {
            const item = shoppingCart.find(item => item.id === productId);
            if (!item) return;
            
            item.quantity += change;
            
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDisplay();
            }
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartCount = document.getElementById('cartCount');
            const cartSubtotal = document.getElementById('cartSubtotal');
            const cartTotalEl = document.getElementById('cartTotal');
            
            const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            cartItems.innerHTML = '';
            cartTotal = 0;
            
            if (shoppingCart.length === 0) {
                cartItems.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: rgba(255,255,255,0.8);">
                        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5; color: var(--primary-color);"></i>
                        <p style="font-size: 1.2rem;">Ihr Warenkorb ist leer</p>
                        <p style="font-size: 0.9rem; margin-top: 10px; color: rgba(255,255,255,0.6);">Fügen Sie Produkte hinzu, um sie hier fließen zu sehen</p>
                    </div>
                `;
            } else {
                shoppingCart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    cartTotal += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${item.name}</h3>
                            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                            <div class="cart-item-controls">
                                <button class="quantity-btn quantity-minus" data-id="${item.id}">-</button>
                                <span style="color: white; min-width: 30px; text-align: center;">${item.quantity}</span>
                                <button class="quantity-btn quantity-plus" data-id="${item.id}">+</button>
                                <button class="remove-item" data-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    cartItems.appendChild(cartItem);
                });
            }
            
            cartSubtotal.textContent = `$${cartTotal.toFixed(2)}`;
            cartTotalEl.textContent = `$${cartTotal.toFixed(2)}`;
        }

        function openCart() {
            document.getElementById('shoppingCart').classList.add('active');
            document.getElementById('cartOverlay').classList.add('active');
        }

        function closeCart() {
            document.getElementById('shoppingCart').classList.remove('active');
            document.getElementById('cartOverlay').classList.remove('active');
        }

        function checkout() {
            if (shoppingCart.length === 0) {
                alert('Ihr Warenkorb ist leer!');
                return;
            }
            
            alert(`Zahlung erfolgreich!\n\nGesamt: $${cartTotal.toFixed(2)}\n\nVielen Dank für Ihren Einkauf bei Liquid Glass 2050!`);
            shoppingCart = [];
            updateCartDisplay();
            closeCart();
        }
                    // Load featured products
            loadFeaturedProducts();
            
            // Setup new event listeners
            setupEnhancedEventListeners();
            
            // Initialize stock indicator
            updateStockIndicator();
            
            // Setup quick support
            setupQuickSupport();

        // Enhanced event listeners setup
        function setupEnhancedEventListeners() {
            // Category filtering
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function() {
                    const category = this.dataset.category;
                    filterByCategory(category);
                });
            });
            
            // Sort functionality
            document.getElementById('sortSelect').addEventListener('change', function() {
                sortProducts(this.value);
            });
            
            // Price range filtering
            const minRange = document.getElementById('minRange');
            const maxRange = document.getElementById('maxRange');
            const minPrice = document.getElementById('minPrice');
            const maxPrice = document.getElementById('maxPrice');
            
            minRange.addEventListener('input', function() {
                if (parseInt(this.value) > parseInt(maxRange.value)) {
                    maxRange.value = this.value;
                }
                minPrice.textContent = '$' + this.value;
                filterByPrice();
            });
            
            maxRange.addEventListener('input', function() {
                if (parseInt(this.value) < parseInt(minRange.value)) {
                    minRange.value = this.value;
                }
                maxPrice.textContent = '$' + this.value;
                filterByPrice();
            });
            
            // Apply filters
            document.getElementById('applyFilters').addEventListener('click', applyAllFilters);
            document.getElementById('resetFilters').addEventListener('click', resetFilters);
            
            // Newsletter form
            document.getElementById('newsletterForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                subscribeNewsletter(email);
            });
            
            // Scroll to top
            document.getElementById('scrollToTop').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Quick view on product click
            document.addEventListener('click', function(e) {
                // Product card click for quick view
                if (e.target.closest('.product-card') && !e.target.closest('.add-to-cart') && !e.target.closest('.ar-preview-btn')) {
                    const card = e.target.closest('.product-card');
                    const productId = card.querySelector('.add-to-cart')?.dataset.id;
                    if (productId) {
                        openQuickView(parseInt(productId));
                    }
                }
            });
            
            // Close quick view
            document.getElementById('quickviewOverlay').addEventListener('click', closeQuickView);
            
            // Quick support
            document.getElementById('quickSupport').addEventListener('click', openQuickSupport);
        }

        // Load featured products
        function loadFeaturedProducts() {
            const slider = document.getElementById('featuredSlider');
            if (!slider) return;
            
            // Randomly select 6 products as featured
            const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);
            
            featured.forEach(product => {
                const card = document.createElement('div');
                card.className = 'featured-card';
                
                // Add random badge
                const badges = ['new', 'sale', 'bestseller'];
                const badge = badges[Math.floor(Math.random() * badges.length)];
                
                card.innerHTML = `
                    ${badge ? `<span class="featured-badge">${badge.toUpperCase()}</span>` : ''}
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${getRatingStars(Math.random() * 3 + 2)}
                        </div>
                        <span class="rating-count">(${Math.floor(Math.random() * 1000)})</span>
                    </div>
                    
                    <div class="product-footer">
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                `;
                slider.appendChild(card);
            });
        }

        function getRatingStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            let stars = '';
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }

        // Filter products by category
        function filterByCategory(category) {
            const filtered = products.filter(p => p.category === category);
            renderFilteredProducts(filtered);
            
            // Update active state
            document.querySelectorAll('.category-card').forEach(card => {
                card.style.borderColor = card.dataset.category === category ? 'var(--primary-color)' : 'var(--glass-border)';
            });
        }

        // Sort products
        function sortProducts(sortType) {
            let sorted = [...products];
            
            switch(sortType) {
                case 'price-asc':
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'newest':
                    sorted = sorted.reverse();
                    break;
            }
            
            renderFilteredProducts(sorted);
        }

        // Filter by price range
        function filterByPrice() {
            const min = parseInt(document.getElementById('minRange').value);
            const max = parseInt(document.getElementById('maxRange').value);
            
            const filtered = products.filter(p => p.price >= min && p.price <= max);
            renderFilteredProducts(filtered);
        }

        // Apply all filters
        function applyAllFilters() {
            const min = parseInt(document.getElementById('minRange').value);
            const max = parseInt(document.getElementById('maxRange').value);
            const sortType = document.getElementById('sortSelect').value;
            
            let filtered = products.filter(p => p.price >= min && p.price <= max);
            
            // Apply sorting
            switch(sortType) {
                case 'price-asc':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filtered.sort((a, b) => b.name.localeCompare(a.name));
                    break;
            }
            
            renderFilteredProducts(filtered);
        }

        // Reset all filters
        function resetFilters() {
            document.getElementById('minRange').value = 0;
            document.getElementById('maxRange').value = 5000;
            document.getElementById('minPrice').textContent = '$0';
            document.getElementById('maxPrice').textContent = '$5000';
            document.getElementById('sortSelect').value = 'default';
            
            // Reset category cards
            document.querySelectorAll('.category-card').forEach(card => {
                card.style.borderColor = 'var(--glass-border)';
            });
            
            loadProducts();
        }

        // Render filtered products
        function renderFilteredProducts(filteredProducts) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: rgba(255,255,255,0.7);">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                        <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Keine Produkte gefunden</h3>
                        <p>Versuchen Sie, Ihre Filter anzupassen</p>
                    </div>
                `;
                return;
            }
            
            filteredProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="ar-preview-btn" data-id="${product.id}" data-name="${product.name}">
                            <i class="fas fa-vr-cardboard"></i>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Open quick view
        function openQuickView(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const modalContent = document.getElementById('quickviewContent');
            modalContent.innerHTML = `
                <div class="quickview-product">
                    <div class="quickview-row">
                        <div class="quickview-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="quickview-details">
                            <h2 class="product-title">${product.name}</h2>
                            <span class="product-category">${product.category}</span>
                            
                            <div class="product-rating">
                                <div class="rating-stars">
                                    ${getRatingStars(Math.random() * 3 + 2)}
                                </div>
                                <span class="rating-count">(${Math.floor(Math.random() * 1000)} Bewertungen)</span>
                            </div>
                            
                            <div class="product-price" style="font-size: 2.5rem; margin: 20px 0;">$${product.price.toFixed(2)}</div>
                            
                            <p class="product-description" style="font-size: 1.1rem; line-height: 1.6;">${product.description}</p>
                            
                            <div class="specs-grid">
                                <div class="spec-item">
                                    <span class="spec-label">Verfügbarkeit:</span>
                                    <span class="spec-value" style="color: var(--neon-green);">Auf Lager</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">Versand:</span>
                                    <span class="spec-value">Kostenlos (1-2 Tage)</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">Garantie:</span>
                                    <span class="spec-value">3 Jahre</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">Hersteller:</span>
                                    <span class="spec-value">Liquid Glass Tech</span>
                                </div>
                            </div>
                            
                            <div style="margin: 30px 0;">
                                <h4 style="margin-bottom: 15px; color: white;">Farbe wählen:</h4>
                                <div class="product-variations">
                                    <div class="variation-option active">Space Black</div>
                                    <div class="variation-option">Liquid Silver</div>
                                    <div class="variation-option">Quantum Blue</div>
                                    <div class="variation-option">Neon Pink</div>
                                </div>
                            </div>
                            
                            <button class="hero-button" style="width: 100%; margin-top: 20px;" onclick="addToCart(${product.id}, this)">
                                <i class="fas fa-cart-plus"></i> IN DEN WARENKORB
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('quickviewOverlay').classList.add('active');
            document.getElementById('quickviewModal').classList.add('active');
        }

        function closeQuickView() {
            document.getElementById('quickviewOverlay').classList.remove('active');
            document.getElementById('quickviewModal').classList.remove('active');
        }

        // Newsletter subscription
        function subscribeNewsletter(email) {
            if (!email) return;
            
            // Simulate API call
            setTimeout(() => {
                alert('Vielen Dank für Ihr Abonnement! Sie erhalten exklusive Updates über unsere neuesten Produkte.');
                document.querySelector('#newsletterForm input[type="email"]').value = '';
                
                // Animate success
                const button = document.querySelector('.newsletter-button');
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> ABONNIERT!';
                button.style.background = 'var(--neon-green)';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                }, 3000);
            }, 500);
        }

        // Update stock indicator
        function updateStockIndicator() {
            // Simulate dynamic stock levels
            const stockFill = document.getElementById('stockFill');
            const stockText = document.getElementById('stockText');
            
            if (stockFill && stockText) {
                const stockLevels = [5, 3, 2, 1, 10, 7];
                const randomStock = stockLevels[Math.floor(Math.random() * stockLevels.length)];
                const percentage = (randomStock / 10) * 100;
                
                stockFill.style.width = `${percentage}%`;
                stockText.textContent = `Nur noch ${randomStock} verfügbar!`;
                
                // Change color based on stock level
                if (randomStock <= 2) {
                    stockFill.style.background = 'var(--neon-pink)';
                } else if (randomStock <= 5) {
                    stockFill.style.background = 'var(--neon-yellow)';
                } else {
                    stockFill.style.background = 'var(--primary-color)';
                }
                
                // Randomly show/hide
                setTimeout(() => {
                    document.getElementById('stockIndicator').style.display = Math.random() > 0.5 ? 'flex' : 'none';
                    setTimeout(updateStockIndicator, Math.random() * 10000 + 5000);
                }, 8000);
            }
        }

        // Quick support
        function setupQuickSupport() {
            const supportBtn = document.getElementById('quickSupport');
            supportBtn.addEventListener('click', openQuickSupport);
        }

        function openQuickSupport() {
            const supportWindow = window.open('', 'Support', 'width=400,height=600');
            supportWindow.document.write(`
                <html>
                <head>
                    <title>LIQUID GLASS Support</title>
                    <style>
                        body {
                            background: linear-gradient(135deg, #050510 0%, #0a0a1a 100%);
                            color: white;
                            font-family: 'Segoe UI', sans-serif;
                            margin: 0;
                            padding: 20px;
                        }
                        .support-container {
                            max-width: 400px;
                            margin: 0 auto;
                        }
                        .support-title {
                            color: #00f5d4;
                            text-align: center;
                            margin-bottom: 30px;
                        }
                        .support-option {
                            background: rgba(255,255,255,0.05);
                            border: 1px solid rgba(255,255,255,0.1);
                            border-radius: 15px;
                            padding: 15px;
                            margin-bottom: 15px;
                            cursor: pointer;
                            transition: 0.3s;
                        }
                        .support-option:hover {
                            background: rgba(0,245,212,0.1);
                            border-color: #00f5d4;
                        }
                    </style>
                </head>
                <body>
                    <div class="support-container">
                        <h2 class="support-title">💬 Live Support</h2>
                        <div class="support-option" onclick="alert('Live Chat gestartet!')">
                            <strong>💬 Live Chat</strong>
                            <p>Soforthilfe von unseren Experten</p>
                        </div>
                        <div class="support-option" onclick="alert('E-Mail-Vorlage geöffnet!')">
                            <strong>📧 E-Mail-Support</strong>
                            <p>Antwort innerhalb von 24 Stunden</p>
                        </div>
                        <div class="support-option" onclick="alert('FAQ-Seite wird geöffnet!')">
                            <strong>📚 FAQ</strong>
                            <p>Häufig gestellte Fragen</p>
                        </div>
                        <div class="support-option" onclick="alert('Rückruf angefordert!')">
                            <strong>📞 Rückruf anfordern</strong>
                            <p>Wir rufen Sie innerhalb von 1 Stunde zurück</p>
                        </div>
                    </div>
                </body>
                </html>
            `);
        }

        // Product badges
        function addProductBadges() {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                let badge = null;
                if (index === 0) badge = 'badge-new';
                else if (index === 1) badge = 'badge-sale';
                else if (index === 2) badge = 'badge-bestseller';
                
                if (badge) {
                    const badgeDiv = document.createElement('div');
                    badgeDiv.className = `product-badge ${badge}`;
                    badgeDiv.textContent = badge.replace('badge-', '').toUpperCase();
                    card.style.position = 'relative';
                    card.appendChild(badgeDiv);
                }
            });
        }

        // Initialize badges
        setTimeout(addProductBadges, 1000);
                // LIQUID REALITY SHOWROOM
        function initShowroom() {
            const showroomBtn = document.getElementById('enterShowroom');
            const resetBtn = document.getElementById('resetShowroom');
            const captureBtn = document.getElementById('captureShowroom');
            const tempSlider = document.getElementById('tempSlider');
            const tempValue = document.getElementById('tempValue');
            const modeButtons = document.querySelectorAll('.mode-btn');
            const effectButtons = document.querySelectorAll('.effect-btn');
            const productSelectors = document.querySelectorAll('.showroom-product');
            
            // Temperature slider
            tempSlider.addEventListener('input', function() {
                const value = this.value;
                tempValue.textContent = `${value}°C`;
                
                // Update temperature status
                const status = document.querySelector('.temp-status');
                if (value < 20) {
                    status.textContent = 'Eiskalt';
                    status.style.color = 'var(--neon-blue)';
                } else if (value < 40) {
                    status.textContent = 'Kühl';
                    status.style.color = 'var(--primary-color)';
                } else if (value < 60) {
                    status.textContent = 'Warm';
                    status.style.color = 'var(--neon-yellow)';
                } else if (value < 80) {
                    status.textContent = 'Heiß';
                    status.style.color = 'var(--neon-pink)';
                } else {
                    status.textContent = 'Glühend';
                    status.style.color = 'var(--neon-pink)';
                }
            });
            
            // Mode buttons
            modeButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    modeButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const mode = this.dataset.mode;
                    animateShowroomMode(mode);
                });
            });
            
            // Effect buttons
            effectButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    effectButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const effect = this.dataset.effect;
                    applyShowroomEffect(effect);
                });
            });
            
            // Product selectors
            productSelectors.forEach(product => {
                product.addEventListener('click', function() {
                    const productId = this.dataset.id;
                    loadProductIntoShowroom(productId);
                });
            });
            
            // Showroom actions
            showroomBtn.addEventListener('click', function() {
                const canvas = document.getElementById('showroomCanvas');
                const placeholder = canvas.querySelector('.showroom-placeholder');
                
                // Animate entrance
                canvas.style.border = '2px solid var(--primary-color)';
                canvas.style.boxShadow = '0 0 40px rgba(var(--primary-rgb), 0.3)';
                
                // Create liquid particles
                createShowroomParticles();
                
                // Hide placeholder
                placeholder.style.opacity = '0';
                setTimeout(() => {
                    placeholder.style.display = 'none';
                    
                    // Add 3D product visualizations
                    add3DProductsToShowroom();
                }, 500);
            });
            
            resetBtn.addEventListener('click', function() {
                const canvas = document.getElementById('showroomCanvas');
                const placeholder = canvas.querySelector('.showroom-placeholder');
                
                // Reset showroom
                canvas.style.border = '2px dashed rgba(255, 255, 255, 0.1)';
                canvas.style.boxShadow = 'none';
                
                // Clear particles
                const particles = canvas.querySelectorAll('.showroom-particle');
                particles.forEach(p => p.remove());
                
                // Clear 3D products
                const products3d = canvas.querySelectorAll('.showroom-product-3d');
                products3d.forEach(p => p.remove());
                
                // Show placeholder
                placeholder.style.display = 'flex';
                setTimeout(() => {
                    placeholder.style.opacity = '1';
                }, 50);
            });
            
            captureBtn.addEventListener('click', function() {
                // Create a screenshot effect
                const showroom = document.querySelector('.reality-showroom');
                showroom.style.animation = 'flash 0.5s';
                
                setTimeout(() => {
                    showroom.style.animation = '';
                    
                    // Show success message
                    const message = document.createElement('div');
                    message.className = 'flash-message';
                    message.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <span>3D-Screenshot gespeichert!</span>
                    `;
                    message.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(20px);
                        border: 1px solid var(--glass-border);
                        border-radius: 20px;
                        padding: 20px 30px;
                        color: white;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        z-index: 10000;
                        animation: fadeInOut 2s ease-in-out;
                    `;
                    
                    document.body.appendChild(message);
                    
                    setTimeout(() => {
                        message.remove();
                    }, 2000);
                }, 500);
            });
        }

        function createShowroomParticles() {
            const canvas = document.getElementById('showroomCanvas');
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'showroom-particle';
                
                const size = Math.random() * 20 + 10;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: radial-gradient(circle, var(--primary-color), transparent 70%);
                    border-radius: 50%;
                    left: ${left}%;
                    top: ${top}%;
                    animation: floatParticle ${duration}s infinite ease-in-out ${delay}s;
                    opacity: 0.3;
                    pointer-events: none;
                `;
                
                canvas.appendChild(particle);
            }
            
            // Add CSS for animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatParticle {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                    25% { transform: translate(20px, -20px) scale(1.2); opacity: 0.6; }
                    50% { transform: translate(-15px, 15px) scale(0.8); opacity: 0.4; }
                    75% { transform: translate(-20px, -20px) scale(1.1); opacity: 0.5; }
                }
                
                @keyframes flash {
                    0% { filter: brightness(1); }
                    50% { filter: brightness(2); }
                    100% { filter: brightness(1); }
                }
                
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -40%); }
                    20% { opacity: 1; transform: translate(-50%, -50%); }
                    80% { opacity: 1; transform: translate(-50%, -50%); }
                    100% { opacity: 0; transform: translate(-50%, -60%); }
                }
            `;
            document.head.appendChild(style);
        }

        function add3DProductsToShowroom() {
            const canvas = document.getElementById('showroomCanvas');
            const products = [1, 2, 5, 8]; // Product IDs
            
            products.forEach((productId, index) => {
                const product3d = document.createElement('div');
                product3d.className = 'showroom-product-3d';
                
                const angle = (index / products.length) * Math.PI * 2;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                product3d.style.cssText = `
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background: rgba(var(--primary-rgb), 0.1);
                    border: 1px solid rgba(var(--primary-rgb), 0.3);
                    border-radius: 15px;
                    left: calc(50% + ${x}px);
                    top: calc(50% + ${y}px);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: rotate3d 20s infinite linear;
                    animation-delay: ${index * 2}s;
                    z-index: 2;
                `;
                
                const product = products.find(p => p.id === productId);
                if (product) {
                    product3d.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" 
                             style="width: 60px; height: 60px; border-radius: 10px;">
                    `;
                } else {
                    product3d.innerHTML = `<i class="fas fa-cube" style="font-size: 2rem; color: var(--primary-color);"></i>`;
                }
                
                canvas.appendChild(product3d);
            });
            
            // Add rotation animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rotate3d {
                    0% { transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg); }
                    100% { transform: translate(-50%, -50%) rotateY(360deg) rotateX(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        function animateShowroomMode(mode) {
            const particles = document.querySelectorAll('.showroom-particle');
            
            particles.forEach(particle => {
                switch(mode) {
                    case 'flow':
                        particle.style.animation = 'floatParticle 15s infinite ease-in-out';
                        break;
                    case 'hover':
                        particle.style.animation = 'floatParticle 5s infinite ease-in-out';
                        particle.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
                        break;
                    case 'dance':
                        particle.style.animation = 'floatParticle 3s infinite ease-in-out alternate';
                        break;
                }
            });
        }

        function applyShowroomEffect(effect) {
            const canvas = document.getElementById('showroomCanvas');
            
            // Remove existing effects
            canvas.style.background = '';
            
            switch(effect) {
                case 'rain':
                    canvas.style.background = 
                        'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(var(--primary-rgb), 0.3) 100%)';
                    break;
                case 'nebula':
                    canvas.style.background = 
                        'radial-gradient(circle at center, rgba(var(--neon-purple-rgb), 0.2), rgba(0, 0, 0, 0.8) 70%)';
                    break;
                case 'hologram':
                    canvas.style.background = 
                        'linear-gradient(45deg, transparent 0%, rgba(var(--primary-rgb), 0.1) 50%, transparent 100%)';
                    canvas.style.backgroundSize = '200% 200%';
                    canvas.style.animation = 'hologramEffect 3s infinite linear';
                    break;
            }
        }

        // AI PERSONAL SHOPPER
        function initAIShopper() {
            const aiSend = document.getElementById('aiSend');
            const aiInput = document.getElementById('aiInput');
            const quickQuestions = document.querySelectorAll('.quick-question');
            const moodOptions = document.querySelectorAll('.mood-option');
            
            // Quick questions
            quickQuestions.forEach(btn => {
                btn.addEventListener('click', function() {
                    const question = this.dataset.question;
                    askAIQuestion(question);
                });
            });
            
            // Mood options
            moodOptions.forEach(btn => {
                btn.addEventListener('click', function() {
                    moodOptions.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const mood = this.dataset.mood;
                    filterByMood(mood);
                });
            });
            
            // Send message
            aiSend.addEventListener('click', sendAIMessage);
            aiInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendAIMessage();
                }
            });
            
            // Load AI recommendations
            loadAIRecommendations();
            
            // Animate AI avatar
            animateAIAvatar();
        }

        function sendAIMessage() {
            const input = document.getElementById('aiInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Add user message to chat
            addChatMessage('user', message);
            
            // Clear input
            input.value = '';
            
            // Simulate AI thinking
            setTimeout(() => {
                // Generate AI response
                const responses = [
                    `Interessante Frage! Basierend auf Ihrer Anfrage "${message}" habe ich 5 perfekte Produkte gefunden.`,
                    `Gute Wahl! Ich empfehle folgende Liquid Glass Produkte für Ihre Bedürfnisse.`,
                    `Fantastisch! Hier sind personalisierte Empfehlungen basierend auf Ihrer Anfrage.`,
                    `Verstanden! Ich habe die besten Produkte für Sie ausgewählt. Schauen Sie sich diese an!`
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addChatMessage('ai', randomResponse);
                
                // Update recommendations based on query
                updateRecommendationsBasedOnQuery(message);
                
                // Scroll to bottom
                const chat = document.getElementById('aiChat');
                chat.scrollTop = chat.scrollHeight;
            }, 1000 + Math.random() * 1000);
        }

        function addChatMessage(sender, text) {
            const chat = document.getElementById('aiChat');
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `${sender}-message`;
            
            const bubble = document.createElement('div');
            bubble.className = `message-bubble ${sender}`;
            bubble.innerHTML = `<p>${text}</p>`;
            
            messageDiv.appendChild(bubble);
            chat.appendChild(messageDiv);
            
            // Animate message
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                messageDiv.style.transition = 'all 0.3s ease';
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            }, 10);
            
            // Scroll to bottom
            chat.scrollTop = chat.scrollHeight;
        }

        function askAIQuestion(question) {
            const input = document.getElementById('aiInput');
            input.value = question;
            sendAIMessage();
        }

        function filterByMood(mood) {
            const recommendations = [
                { id: 1, name: 'Quantum Phone', price: 1499.99, mood: 'futuristic' },
                { id: 2, name: 'Liquid Laptop', price: 2999.99, mood: 'luxury' },
                { id: 5, name: 'Neural VR', price: 899.99, mood: 'futuristic' },
                { id: 8, name: 'Holo Projector', price: 899.99, mood: 'luxury' },
                { id: 6, name: 'Gaming System', price: 3999.99, mood: 'gaming' },
                { id: 9, name: 'Quantum Keyboard', price: 499.99, mood: 'minimalist' }
            ];
            
            const filtered = recommendations.filter(product => product.mood === mood);
            displayAIRecommendations(filtered);
        }

        function loadAIRecommendations() {
            // Initial recommendations
            const initialRecs = [
                { id: 1, name: 'Quantum Glas Handy', price: 1499.99, reason: 'Perfekt für Tech-Enthusiasten' },
                { id: 5, name: 'Neurale Interface Brille', price: 899.99, reason: 'Revolutionäre AR-Erfahrung' },
                { id: 8, name: 'HoloVision Projektor', price: 899.99, reason: 'True 3D Hologramme' },
                { id: 9, name: 'Quantum Tastatur', price: 499.99, reason: 'Adaptives haptisches Feedback' }
            ];
            
            displayAIRecommendations(initialRecs);
        }

        function displayAIRecommendations(recommendations) {
            const slider = document.getElementById('recSlider');
            slider.innerHTML = '';
            
            recommendations.forEach(product => {
                const recCard = document.createElement('div');
                recCard.className = 'ai-rec-card';
                recCard.style.cssText = `
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--glass-border);
                    border-radius: 15px;
                    padding: 20px;
                    margin-bottom: 15px;
                    transition: var(--transition-medium);
                    cursor: pointer;
                `;
                
                recCard.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                        <h4 style="color: white; font-size: 1.1rem; font-weight: 600;">${product.name}</h4>
                        <span style="color: var(--primary-color); font-weight: 700;">$${product.price.toFixed(2)}</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem; margin-bottom: 15px;">${product.reason || 'Empfohlen von Nexa AI'}</p>
                    <div style="display: flex; gap: 10px;">
                        <button class="mini-btn add-to-cart" data-id="${product.id}" 
                                style="background: rgba(var(--primary-rgb), 0.2); color: white; border: 1px solid var(--glass-border); padding: 8px 15px; border-radius: 10px; cursor: pointer; font-size: 0.9rem;">
                            <i class="fas fa-cart-plus"></i> Hinzufügen
                        </button>
                        <button class="mini-btn view-details" data-id="${product.id}"
                                style="background: rgba(255, 255, 255, 0.05); color: white; border: 1px solid var(--glass-border); padding: 8px 15px; border-radius: 10px; cursor: pointer; font-size: 0.9rem;">
                            <i class="fas fa-eye"></i> Details
                        </button>
                    </div>
                `;
                
                slider.appendChild(recCard);
            });
        }

        function updateRecommendationsBasedOnQuery(query) {
            // This would normally make an API call to AI
            // For now, simulate with filtered products
            
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 4);
            
            const formattedRecs = filtered.map(p => ({
                id: p.id,
                name: p.name,
                price: p.price,
                reason: 'Passt zu Ihrer Anfrage'
            }));
            
            if (formattedRecs.length > 0) {
                displayAIRecommendations(formattedRecs);
            }
        }

        function animateAIAvatar() {
            // Randomly blink and animate
            setInterval(() => {
                const eyes = document.querySelectorAll('.liquid-face.eye-left, .liquid-face.eye-right');
                eyes.forEach(eye => {
                    eye.style.animation = 'none';
                    setTimeout(() => {
                        eye.style.animation = 'blink 3s infinite';
                    }, 10);
                });
            }, 8000);
        }

        // PRODUCT DNA SCANNER
        function initDNAScanner() {
            const startScanBtn = document.getElementById('startScan');
            const compareBtn = document.getElementById('compareDNA');
            const downloadBtn = document.getElementById('downloadDNA');
            const scannableProducts = document.querySelectorAll('.scannable-product');
            const dnaProgress = document.getElementById('dnaProgress');
            const dnaProgressText = document.getElementById('dnaProgressText');
            
            // Start scan
            startScanBtn.addEventListener('click', function() {
                startDNAScan();
            });
            
            // Compare DNA
            compareBtn.addEventListener('click', function() {
                openDNAComparison();
            });
            
            // Download DNA
            downloadBtn.addEventListener('click', function() {
                downloadDNAProfile();
            });
            
            // Scannable products
            scannableProducts.forEach(product => {
                product.addEventListener('click', function() {
                    const productId = this.dataset.id;
                    const productType = this.dataset.product;
                    selectProductForScan(productId, productType);
                });
            });
            
            // Initialize DNA signature canvas
            initDNASignature();
            
            // Simulate random DNA data updates
            simulateDNAData();
        }

        function startDNAScan() {
            const progressBar = document.getElementById('dnaProgress');
            const progressText = document.getElementById('dnaProgressText');
            const scannerBeam = document.querySelector('.scanner-beam');
            const dnaStrand = document.querySelector('.dna-strand');
            
            // Reset progress
            progressBar.style.width = '0%';
            progressText.textContent = 'Initialisiere... 0%';
            
            // Start scanning animation
            scannerBeam.style.animation = 'beamScan 1s infinite linear';
            dnaStrand.style.animation = 'float 4s infinite ease-in-out';
            
            let progress = 0;
            const scanInterval = setInterval(() => {
                progress += Math.random() * 10 + 5;
                if (progress > 100) progress = 100;
                
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `Scanne... ${Math.round(progress)}%`;
                
                // Update DNA metrics during scan
                updateDNAMetrics(progress);
                
                if (progress >= 100) {
                    clearInterval(scanInterval);
                    progressText.textContent = 'Scan abgeschlossen!';
                    
                    // Complete animation
                    scannerBeam.style.animation = '';
                    dnaStrand.style.animation = 'dnaComplete 2s ease-out';
                    
                    // Show complete message
                    setTimeout(() => {
                        showScanComplete();
                    }, 1000);
                }
            }, 200);
        }

        function updateDNAMetrics(progress) {
            // Update temperature
            const tempMetric = document.getElementById('tempMetric');
            const temp = -196 + (progress / 100) * 196;
            tempMetric.textContent = `${Math.round(temp)}°C`;
            
            // Update quantum metric
            const quantumMetric = document.getElementById('quantumMetric');
            const qubits = Math.round(progress * 1.28);
            quantumMetric.textContent = `${qubits} Qubits`;
            
            // Update liquid intelligence
            const liquidMetric = document.getElementById('liquidMetric');
            const aiLevel = Math.round(progress / 11.11);
            liquidMetric.textContent = `AI Level ${aiLevel}`;
            
            // Update energy efficiency
            const energyMetric = document.getElementById('energyMetric');
            const energy = (0.02 - (progress / 100) * 0.018).toFixed(3);
            energyMetric.textContent = `${energy}W/h`;
            
            // Update DNA code
            const dnaCode = document.getElementById('dnaCode');
            const hexProgress = Math.round(progress).toString(16).padStart(2, '0');
            dnaCode.textContent = `LG2050-QUANT-${hexProgress}3F-B7C2-1E8D`;
            
            // Update signature
            updateDNASignature(progress);
        }

        function initDNASignature() {
            const canvas = document.getElementById('dnaSignature');
            const ctx = canvas.getContext('2d');
            
            // Set canvas background
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function updateDNASignature(progress) {
            const canvas = document.getElementById('dnaSignature');
            const ctx = canvas.getContext('2d');
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw DNA signature wave
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            
            for (let x = 0; x < canvas.width; x++) {
                const amplitude = (progress / 100) * 30;
                const frequency = 0.05;
                const y = canvas.height / 2 + Math.sin(x * frequency + progress / 10) * amplitude;
                
                ctx.lineTo(x, y);
            }
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, 'var(--primary-color)');
            gradient.addColorStop(0.5, 'var(--neon-purple)');
            gradient.addColorStop(1, 'var(--neon-blue)');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Add data points
            for (let i = 0; i < 5; i++) {
                const x = (canvas.width / 5) * i;
                const y = canvas.height / 2 + Math.sin(x * 0.05 + progress / 10) * 30;
                
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        function showScanComplete() {
            // Create completion overlay
            const overlay = document.createElement('div');
            overlay.className = 'scan-complete';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(20px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.5s ease;
            `;
            
            overlay.innerHTML = `
                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 30px; padding: 40px; max-width: 500px; text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--neon-green); margin-bottom: 20px;"></i>
                    <h3 style="color: white; font-size: 1.8rem; margin-bottom: 10px;">DNA-SCAN ABGESCHLOSSEN</h3>
                    <p style="color: rgba(255, 255, 255, 0.7); line-height: 1.6; margin-bottom: 30px;">
                        Das technologische DNA-Profil wurde erfolgreich entschlüsselt. 
                        Das Gerät verfügt über erweiterte Flüssigkeitsintelligenz und Quantenverarbeitung.
                    </p>
                    <div style="display: flex; gap: 15px; justify-content: center;">
                        <button id="closeScan" style="background: rgba(var(--primary-rgb), 0.2); border: 1px solid var(--glass-border); color: white; padding: 12px 25px; border-radius: 20px; cursor: pointer; font-weight: 600;">
                            Schließen
                        </button>
                        <button id="saveScan" style="background: rgba(var(--neon-green-rgb), 0.2); border: 1px solid var(--neon-green); color: var(--neon-green); padding: 12px 25px; border-radius: 20px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-save"></i> Speichern
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(overlay);
            
            // Add fade in animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            // Close button
            overlay.querySelector('#closeScan').addEventListener('click', function() {
                overlay.style.animation = 'fadeOut 0.5s ease';
                setTimeout(() => overlay.remove(), 500);
            });
            
            // Save button
            overlay.querySelector('#saveScan').addEventListener('click', function() {
                downloadDNAProfile();
            });
        }

        function openDNAComparison() {
            // This would open a comparison interface
            alert('DNA-Vergleichsfunktion wird geladen...\n\nVergleichen Sie die technologischen DNA-Profile verschiedener Geräte.');
        }

        function downloadDNAProfile() {
            // Create download link
            const dnaCode = document.getElementById('dnaCode').textContent;
            const blob = new Blob([`
                LIQUID GLASS 2050 - TECHNOLOGIE-DNA-PROFIL
                ==========================================
                
                Produkt: Quantum Glas Handy
                DNA-Signatur: ${dnaCode}
                Scan-Datum: ${new Date().toLocaleDateString('de-DE')}
                
                MESSWERTE:
                - Liquid Core Temperatur: -196°C
                - Quantenprozessor: 128 Qubits
                - Flüssigkeits-Intelligenz: AI Level 9
                - Energie-Effizienz: 0.002W/h
                
                BESCHREIBUNG:
                Dieses Gerät verfügt über fortschrittliche Flüssigkeitsintelligenz
                und Quantenverarbeitung. Die DNA-Signatur bestätigt die Echtheit
                und fortgeschrittene Technologie.
                
                🔬 Liquid Glass Technologies - Die Zukunft ist flüssig.
            `], { type: 'text/plain' });
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `dna-profil-${dnaCode}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show download confirmation
            const message = document.createElement('div');
            message.textContent = 'DNA-Profil wird heruntergeladen...';
            message.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(var(--neon-green-rgb), 0.2);
                border: 1px solid var(--neon-green);
                color: var(--neon-green);
                padding: 15px 25px;
                border-radius: 15px;
                z-index: 10000;
                animation: slideInRight 0.5s ease;
            `;
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => message.remove(), 500);
            }, 3000);
        }

        function selectProductForScan(productId, productType) {
            // Highlight selected product
            const products = document.querySelectorAll('.scannable-product');
            products.forEach(p => {
                p.style.borderColor = 'var(--glass-border)';
                p.style.background = 'rgba(255, 255, 255, 0.03)';
            });
            
            const selected = document.querySelector(`[data-id="${productId}"]`);
            selected.style.borderColor = 'var(--primary-color)';
            selected.style.background = 'rgba(var(--primary-rgb), 0.1)';
            
            // Update scanner visualization
            const dnaStrand = document.querySelector('.dna-strand');
            dnaStrand.innerHTML = '';
            
            // Create new DNA strand based on product type
            const colors = [
                'var(--primary-color)',
                'var(--neon-blue)',
                'var(--neon-pink)',
                'var(--neon-purple)',
                'var(--neon-green)',
                'var(--neon-yellow)'
            ];
            
            for (let i = 0; i < 6; i++) {
                const segment = document.createElement('div');
                segment.className = 'strand-segment';
                segment.style.setProperty('--color', colors[i]);
                segment.style.left = `${20 + i * 10}%`;
                segment.style.animationDelay = `${i * 0.2}s`;
                dnaStrand.appendChild(segment);
            }
            
            // Update product info
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                // This would update the scanner with actual product data
                console.log(`Scanning product: ${product.name}`);
            }
        }

        function simulateDNAData() {
            // Randomly update DNA metrics for demo purposes
            setInterval(() => {
                if (Math.random() > 0.7) {
                    const metrics = ['tempMetric', 'quantumMetric', 'liquidMetric', 'energyMetric'];
                    const metric = document.getElementById(metrics[Math.floor(Math.random() * metrics.length)]);
                    
                    // Add slight variation
                    const currentValue = metric.textContent;
                    if (metric.id === 'tempMetric') {
                        const temp = parseInt(currentValue);
                        const variation = Math.random() * 10 - 5;
                        metric.textContent = `${Math.round(temp + variation)}°C`;
                    }
                }
            }, 5000);
        }

        // Initialize all features
        document.addEventListener('DOMContentLoaded', function() {
            // Existing initialization code...
            
            // Initialize new features
            initShowroom();
            initAIShopper();
            initDNAScanner();
        });
                // MICRO INTERACTIONS - Add to your existing JS
        
        // 1. LIQUID CURSOR TRAIL
        function initCursorTrail() {
            const trail = document.getElementById('cursorTrail');
            let mouseX = 0, mouseY = 0;
            let trailX = 0, trailY = 0;
            const speed = 0.1;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            function animate() {
                // Move trail towards mouse
                trailX += (mouseX - trailX) * speed;
                trailY += (mouseY - trailY) * speed;
                
                trail.style.left = trailX + 'px';
                trail.style.top = trailY + 'px';
                trail.style.opacity = '0.5';
                
                // Create particles on fast movement
                const dx = mouseX - trailX;
                const dy = mouseY - trailY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 30) {
                    createCursorParticle(trailX, trailY);
                }
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        function createCursorParticle(x, y) {
            if (Math.random() > 0.3) return; // Limit particle creation
            
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = getRandomColor();
            
            document.body.appendChild(particle);
            
            // Animate particle
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 30;
            const targetX = x + Math.cos(angle) * distance;
            const targetY = y + Math.sin(angle) * distance;
            
            const animation = particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 0.7 
                },
                { 
                    transform: `translate(${targetX - x}px, ${targetY - y}px) scale(0)`,
                    opacity: 0 
                }
            ], {
                duration: 500 + Math.random() * 500,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => particle.remove();
        }
        
        function getRandomColor() {
            const colors = [
                'var(--primary-color)',
                'var(--neon-blue)',
                'var(--neon-pink)',
                'var(--neon-purple)',
                'var(--neon-green)'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        // 2. SECRET LAB
        function initSecretLab() {
            const lab = document.getElementById('secretLab');
            const gravitySlider = document.getElementById('gravitySlider');
            const gravityValue = document.getElementById('gravityValue');
            const physicsToggle = document.getElementById('physicsToggle');
            const liquidStormBtn = document.getElementById('liquidStorm');
            const matrixRainBtn = document.getElementById('matrixRain');
            const resetBtn = document.getElementById('resetAll');
            const dropletCount = document.getElementById('dropletCount');
            const flowRate = document.getElementById('flowRate');
            const labTemp = document.getElementById('labTemp');
            
            // Toggle lab
            lab.addEventListener('click', (e) => {
                if (!lab.classList.contains('active')) {
                    lab.classList.add('active');
                    e.stopPropagation();
                }
            });
            
            // Close lab when clicking outside
            document.addEventListener('click', (e) => {
                if (lab.classList.contains('active') && !lab.contains(e.target)) {
                    lab.classList.remove('active');
                }
            });
            
            // Gravity slider
            gravitySlider.addEventListener('input', function() {
                const value = parseFloat(this.value);
                gravityValue.textContent = value.toFixed(1) + 'x';
                updateGravity(value);
            });
            
            // Physics toggle
            physicsToggle.addEventListener('change', function() {
                if (this.checked) {
                    enablePhysics();
                } else {
                    disablePhysics();
                }
            });
            
            // Liquid storm
            liquidStormBtn.addEventListener('click', function() {
                createLiquidStorm();
                dropletCount.textContent = '∞';
                flowRate.textContent = '4.2 m/s';
                labTemp.textContent = '-273°C';
            });
            
            // Matrix rain
            matrixRainBtn.addEventListener('click', function() {
                createMatrixRain();
                dropletCount.textContent = '256';
                flowRate.textContent = '9.8 m/s';
                labTemp.textContent = '0°C';
            });
            
            // Reset
            resetBtn.addEventListener('click', function() {
                resetLab();
                dropletCount.textContent = '0';
                flowRate.textContent = '0.8 m/s';
                labTemp.textContent = '-196°C';
            });
        }
        
        function updateGravity(multiplier) {
            document.querySelectorAll('.droplet').forEach(droplet => {
                const duration = parseFloat(droplet.style.animationDuration);
                droplet.style.animationDuration = `${duration / multiplier}s`;
            });
        }
        
        function enablePhysics() {
            document.body.style.cursor = 'crosshair';
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        }
        
        function disablePhysics() {
            document.body.style.cursor = 'default';
        }
        
        function createLiquidStorm() {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createRandomDroplet();
                }, i * 100);
            }
        }
        
        function createRandomDroplet() {
            const droplet = document.createElement('div');
            droplet.className = 'droplet';
            
            const size = Math.random() * 150 + 50;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 3;
            
            droplet.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                top: -100px;
                background: radial-gradient(circle at 30% 30%, ${getRandomColor()}, transparent 70%);
                animation: stormDrop ${duration}s linear forwards;
            `;
            
            document.querySelector('.liquid-droplets').appendChild(droplet);
            
            setTimeout(() => {
                droplet.remove();
            }, duration * 1000);
        }
        
        function createMatrixRain() {
            const chars = '01アイウエオカキクケコサシスセソ';
            for (let i = 0; i < 30; i++) {
                createMatrixChar(i);
            }
        }
        
        function createMatrixChar(delay) {
            setTimeout(() => {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                
                char.style.cssText = `
                    position: fixed;
                    top: -50px;
                    left: ${Math.random() * 100}%;
                    color: var(--neon-green);
                    font-family: monospace;
                    font-size: 1.5rem;
                    opacity: 0.8;
                    z-index: 9997;
                    text-shadow: 0 0 10px var(--neon-green);
                    animation: matrixFall ${2 + Math.random() * 3}s linear forwards;
                `;
                
                document.body.appendChild(char);
                
                setTimeout(() => {
                    char.remove();
                }, 5000);
            }, delay * 200);
        }
        
        function resetLab() {
            document.querySelectorAll('.matrix-char').forEach(el => el.remove());
            document.querySelectorAll('.storm-droplet').forEach(el => el.remove());
        }
        
        // 3. KONAMI CODE EASTER EGG
        function initKonamiCode() {
            const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                           'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                           'b', 'a'];
            let current = 0;
            
            const notification = document.getElementById('konamiNotification');
            
            document.addEventListener('keydown', (e) => {
                if (e.key === konami[current]) {
                    current++;
                    if (current === konami.length) {
                        activateKonamiMode();
                        current = 0;
                    }
                } else {
                    current = 0;
                }
            });
        }
        
        function activateKonamiMode() {
            const notification = document.getElementById('konamiNotification');
            
            // Show notification
            notification.classList.add('active');
            
            // Activate special effects
            document.body.style.background = 'linear-gradient(45deg, #000, #111, #222, #000)';
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.animation = 'konamiGlow 2s infinite alternate';
            });
            
            // Add CSS for animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes konamiGlow {
                    0% { box-shadow: 0 0 20px var(--primary-color); }
                    100% { box-shadow: 0 0 40px var(--neon-purple); }
                }
            `;
            document.head.appendChild(style);
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.classList.remove('active');
                
                // Reset after 30 seconds
                setTimeout(() => {
                    document.body.style.background = '';
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.style.animation = '';
                    });
                }, 30000);
            }, 5000);
        }
        
        // 4. QUANTUM LOADER
        function initQuantumLoader() {
            const loader = document.getElementById('quantumLoader');
            
            // Show loader on page load
            window.addEventListener('load', () => {
                setTimeout(() => {
                    loader.classList.remove('active');
                }, 1000);
            });
            
            // Show loader on product interactions
            document.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart') || 
                    e.target.closest('.checkout-btn') ||
                    e.target.closest('.ar-preview-btn')) {
                    
                    loader.classList.add('active');
                    setTimeout(() => {
                        loader.classList.remove('active');
                    }, 800 + Math.random() * 800);
                }
            });
        }
        
        // 5. MICRO CART ANIMATION
        function initMicroCartAnimation() {
            document.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart')) {
                    showCartAnimation();
                }
            });
        }
        
        function showCartAnimation() {
            const animation = document.getElementById('microCart');
            const burst = animation.querySelector('.cart-burst');
            
            // Reset particles
            burst.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('div');
                particle.className = 'burst-particle';
                burst.appendChild(particle);
            }
            
            // Randomize particle directions
            const particles = burst.querySelectorAll('.burst-particle');
            particles.forEach((particle, i) => {
                const angle = (i / particles.length) * Math.PI * 2;
                const distance = 60 + Math.random() * 40;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                particle.style.background = getRandomColor();
            });
            
            // Show and animate
            animation.style.opacity = '1';
            
            setTimeout(() => {
                animation.style.opacity = '0';
                animation.style.transition = 'opacity 0.3s';
            }, 600);
            
            setTimeout(() => {
                animation.style.transition = '';
            }, 1000);
        }
        
        // 6. AMBIENT SOUND TOGGLE
        function initSoundToggle() {
            const toggle = document.getElementById('soundToggle');
            let isMuted = true;
            
            toggle.addEventListener('click', () => {
                isMuted = !isMuted;
                
                if (isMuted) {
                    toggle.classList.add('muted');
                    toggle.querySelector('i').className = 'fas fa-volume-mute';
                } else {
                    toggle.classList.remove('muted');
                    toggle.querySelector('i').className = 'fas fa-volume-up';
                    
                    // Play subtle sound (optional)
                    playAmbientSound();
                }
            });
        }
        
        function playAmbientSound() {
            // This would play actual sound
            // For demo, we'll just create a visual effect
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create oscillator for demo
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 440; // A4 note
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            
            oscillator.start();
            
            // Stop after 0.5 seconds
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            setTimeout(() => oscillator.stop(), 600);
        }
        
        // 7. TIME TRAVEL BUTTON
        function initTimeTravel() {
            const timeBtn = document.getElementById('timeTravel');
            const years = ['1984', '1999', '2010', '2024', '2050', '2100'];
            let currentYear = 4; // Start at 2050
            
            timeBtn.addEventListener('click', () => {
                currentYear = (currentYear + 1) % years.length;
                const year = years[currentYear];
                
                // Update button text
                timeBtn.querySelector('.time-text').textContent = year;
                
                // Add time travel effect
                document.body.style.transition = 'all 0.5s';
                document.body.style.filter = `hue-rotate(${currentYear * 60}deg)`;
                
                // Show year notification
                showYearNotification(year);
                
                // Reset after 2 seconds
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 2000);
            });
        }
        

        function showYearNotification(year) {
            const notification = document.createElement('div');
            notification.className = 'year-notification';
            notification.textContent = `TIME TRAVEL: ${year}`;
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid var(--primary-color);
                border-radius: 20px;
                padding: 20px 40px;
                color: var(--primary-color);
                font-size: 2rem;
                font-weight: bold;
                z-index: 10000;
                animation: timeTravelEffect 2s ease-out;
            `;
            
            document.body.appendChild(notification);
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes timeTravelEffect {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                    40% { transform: translate(-50%, -50%) scale(1); }
                    80% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 2000);
        }
        
        // 8. LIQUID TYPING EFFECT
        function initLiquidTyping() {
            const typing = document.getElementById('liquidTyping');
            const typingText = typing.querySelector('.typing-text');
            
            const messages = [
                "Welcome to Liquid Glass 2050...",
                "Quantum processors online...",
                "Liquid intelligence activated...",
                "Future shopping experience loading...",
                "Neural interface connected..."
            ];
            
            let messageIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            function type() {
                const currentMessage = messages[messageIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentMessage.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingText.textContent = currentMessage.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                if (!isDeleting && charIndex === currentMessage.length) {
                    // Pause at end of message
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
                
                if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    messageIndex = (messageIndex + 1) % messages.length;
                }
                
                const speed = isDeleting ? 50 : 100;
                setTimeout(type, speed);
            }
            
            // Randomly show typing effect
            setInterval(() => {
                if (Math.random() > 0.7 && !typing.style.display) {
                    typing.style.display = 'block';
                    setTimeout(() => {
                        typing.style.display = 'none';
                    }, 10000);
                }
            }, 30000);
            
            // Start typing
            type();
        }
        
        // 9. PAGE SHAKE EFFECT (on cart addition)
        function initPageShake() {
            document.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart')) {
                    document.body.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        document.body.style.animation = '';
                    }, 500);
                }
            });
            
            // Add shake animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // 10. HOVER COLOR CHANGE
        function initHoverColorChange() {
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const randomColor = getRandomColor();
                    this.style.borderColor = randomColor;
                    this.style.boxShadow = `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px ${randomColor}40`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.borderColor = 'var(--glass-border)';
                    this.style.boxShadow = '';
                });
            });
        }
        
        // 11. SECRET DOUBLE-CLICK FEATURE
        function initDoubleClickSecret() {
            let lastClick = 0;
            
            document.addEventListener('dblclick', (e) => {
                const now = Date.now();
                if (now - lastClick < 300) return;
                lastClick = now;
                
                // Create ripple effect
                createRippleEffect(e.clientX, e.clientY);
                
                // Random chance to spawn a floating product
                if (Math.random() > 0.7) {
                    spawnFloatingProduct(e.clientX, e.clientY);
                }
            });
        }
        
        function createRippleEffect(x, y) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border: 2px solid var(--primary-color);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 9999;
                animation: rippleExpand 1s ease-out;
            `;
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rippleExpand {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            setTimeout(() => style.remove(), 1100);
        }
        
        function spawnFloatingProduct(x, y) {
            const product = products[Math.floor(Math.random() * products.length)];
            const floatDiv = document.createElement('div');
            floatDiv.className = 'floating-product';
            
            floatDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 80px; height: 80px; border-radius: 15px;">
                <div style="position: absolute; bottom: -25px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 10px; font-size: 0.7rem; white-space: nowrap;">
                    ${product.name}
                </div>
            `;
            
            floatDiv.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                z-index: 9998;
                animation: floatAway 3s ease-out forwards;
                cursor: pointer;
            `;
            
            document.body.appendChild(floatDiv);
            
            floatDiv.addEventListener('click', () => {
                floatDiv.remove();
                addToCart(product.id, floatDiv);
            });
            
            setTimeout(() => {
                floatDiv.remove();
            }, 3000);
        }
        

        // Initialize all micro-interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Your existing initialization...
            
            // New micro-interactions
            initCursorTrail();
            initSecretLab();
            initKonamiCode();
            initQuantumLoader();
            initMicroCartAnimation();
            initSoundToggle();
            initTimeTravel();
            initLiquidTyping();
            initPageShake();
            initHoverColorChange();
            initDoubleClickSecret();
            
            console.log('🚀 Liquid Glass 2050 - All micro-interactions loaded!');
            console.log('🎮 Try these:');
            console.log('• Mouse trail with particles');
            console.log('• Click the lab bottle (bottom-left)');
            console.log('• Konami Code: ↑↑↓↓←→←→BA');
            console.log('• Double-click anywhere');
            console.log('• Time travel button (top-left)');
        });