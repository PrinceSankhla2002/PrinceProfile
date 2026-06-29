    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        // 'active' class ko toggle karega
        navLinks.classList.toggle('active');
        
        // Icon change karne ka chhota sa logic (Optional)
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '&#10005;'; // Close (X) icon
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger (☰) icon
        }
    });

    // Links par click karne ke baad menu auto-close ho jaye
    document.querySelectorAll('#nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
        });
    });
