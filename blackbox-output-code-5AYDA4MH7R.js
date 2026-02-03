// Simple form submission handler (for demo; replace with real backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo. In production, integrate with a server.)');
    // Reset form
    this.reset();
});