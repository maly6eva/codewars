export function htmlspecialchars(formData: string): string {
    return formData.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
}
