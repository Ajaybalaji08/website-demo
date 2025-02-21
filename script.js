document.addEventListener('DOMContentLoaded', function() {
    // Handle search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Create a search results container
            let resultsContainer = document.querySelector('.search-results');
            if (!resultsContainer) {
                resultsContainer = document.createElement('div');
                resultsContainer.className = 'search-results';
                document.querySelector('.hero-content').appendChild(resultsContainer);
            }
            
            // Simulate search results
            resultsContainer.innerHTML = `
                <h3>Search Results for "${searchTerm}"</h3>
                <div class="result-item">
                    <h4>University of Cambridge</h4>
                    <p>Top-ranked university offering various programs</p>
                </div>
                <div class="result-item">
                    <h4>MIT Scholarship 2024</h4>
                    <p>Full-ride scholarship for international students</p>
                </div>
                <div class="result-item">
                    <h4>Computer Science at Stanford</h4>
                    <p>Master's program in Computer Science</p>
                </div>
            `;
        }
    }

    // Handle auth buttons
    const loginBtn = document.querySelector('.btn-secondary');
    const signUpBtn = document.querySelector('.btn-primary');

    loginBtn.addEventListener('click', function() {
        showModal('Login', `
            <form id="loginForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        `);
    });

    signUpBtn.addEventListener('click', function() {
        showModal('Sign Up', `
            <form id="signupForm">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
        `);
    });

    // Feature cards interaction
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            const feature = this.querySelector('h3').textContent;
            const content = getFeatureContent(feature);
            showModal(feature, content);
        });
    });

    // Modal functionality
    function showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close button functionality
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    function getFeatureContent(feature) {
        const contents = {
            'Universities': `
                <div class="feature-details">
                    <h3>Top Universities</h3>
                    <ul>
                        <li>Harvard University</li>
                        <li>Oxford University</li>
                        <li>MIT</li>
                        <li>Stanford University</li>
                    </ul>
                    <button class="btn btn-primary">View All Universities</button>
                </div>
            `,
            'Courses': `
                <div class="feature-details">
                    <h3>Popular Courses</h3>
                    <ul>
                        <li>Computer Science</li>
                        <li>Business Administration</li>
                        <li>Engineering</li>
                        <li>Medicine</li>
                    </ul>
                    <button class="btn btn-primary">Explore All Courses</button>
                </div>
            `,
            'Scholarships': `
                <div class="feature-details">
                    <h3>Available Scholarships</h3>
                    <ul>
                        <li>Fulbright Scholarship</li>
                        <li>Rhodes Scholarship</li>
                        <li>Chevening Scholarship</li>
                        <li>DAAD Scholarship</li>
                    </ul>
                    <button class="btn btn-primary">Find Scholarships</button>
                </div>
            `,
            'Community': `
                <div class="feature-details">
                    <h3>Join Our Community</h3>
                    <p>Connect with students worldwide!</p>
                    <div class="community-stats">
                        <div>5000+ Members</div>
                        <div>100+ Countries</div>
                        <div>500+ Universities</div>
                    </div>
                    <button class="btn btn-primary">Join Now</button>
                </div>
            `
        };
        return contents[feature] || 'Content not available';
    }

    // Handle mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navbar = document.querySelector('.navbar');
    navbar.insertBefore(mobileMenuBtn, navbar.firstChild);

    mobileMenuBtn.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 