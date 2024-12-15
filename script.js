function removeColor() {
    const colorSelect = document.getElementById('colorSelect');
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    }
}