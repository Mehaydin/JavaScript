function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
   
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 align-self-end sticky-footer bg-primary text-light" id="footer">
    <div class="col-md-4 d-flex align-items-end">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
            </svg>
        </a>
        <a href="/about-us" class="mb-3 me-4 mb-md-0 text-muted text-decoration-none lh-1">About Us</a>
        <a href="/contact" class="mb-3 mb-md-0 text-muted text-decoration-none lh-1">Contact</a>
    </div>
</footer>
    `;
}

export { createFooter };

