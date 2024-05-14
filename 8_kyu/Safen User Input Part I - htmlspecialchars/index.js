function htmlspecialchars(formData) {
    return formData.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;');
}
