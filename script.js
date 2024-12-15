function removeColor() {
            // Get the dropdown element
            const colorSelect = document.getElementById('colorSelect');
            
            // Check if an option is selected
            if (colorSelect.selectedIndex !== -1) {
                // Remove the selected option
                colorSelect.remove(colorSelect.selectedIndex);
            }
        }