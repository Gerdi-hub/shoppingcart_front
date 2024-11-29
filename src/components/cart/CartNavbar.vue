<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
    <div class="container-fluid">
      <!-- Image Section -->
      <div class="navbar-brand">
        <img
            src="https://dev.clubsolaris.com/imgsblog/tips-to-take-care-of-the-beach-during-your-vacations/clean-beach.webp"
            alt="Beach"
            class="navbar-image"
        />
      </div>

      <!-- Left Section: Links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-primary" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" href="#">Contacts</a>
        </li>
      </ul>

      <!-- Right Section: Buttons -->
      <div>
        <button class="btn btn-outline-secondary rounded-pill me-2">Login</button>
        <button class="btn btn-outline-secondary rounded-pill">Register</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CartNavbar",
};
</script>

<style scoped>
/* Navbar Image Styling */
.navbar-image {
  height: 50px; /* Adjust height */
  width: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Optional: Rounding */
  margin-right: 16px; /* Space between image and links */
}

/* Navbar Links Styling */
.nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #f4f7f3;
}

/* Buttons Styling */
.btn {
  padding: 12px 24px;
}
</style>
