
var dropdownid = '';
function toggleDropdown(id) {
    dropdownid = id;
    const dropdown = document.getElementById(dropdownid);

    // Close other open dropdowns
    document.querySelectorAll('.dropdown.open').forEach((openDropdown) => {
        if (openDropdown !== dropdown) {
            openDropdown.classList.remove('open');
        }
    });

    // Toggle the current dropdown
    dropdown.classList.toggle('open');
}
