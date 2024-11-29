<template>
  <h1 class="text-center mb-4 text-primary">Shopping Cart</h1>

  <div class="container mt-4">
    <h3 class="mb-4 text-muted">Add Product</h3>
    <form @submit.prevent="addProduct" class="input-group mb-4">
      <input v-model="newProduct.name" class="form-control" type="text" name="name" id="name" placeholder="Product Name"
             required>
      <input v-model="newProduct.price" class="form-control" type="number" name="price" id="price" placeholder="Price"
             required>
      <input v-model="newProduct.quantity" class="form-control" type="number" name="quantity" id="quantity"
             placeholder="Quantity" required>
      <button type="submit" class="btn btn-outline-primary rounded-pill">Add Product</button>
    </form>
  </div>

  <div class="container mt-4">
    <table class="table table-hover">
      <thead class="table-light">
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th class="text-end">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cartItems" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ formatCurrency(item.price) }}</td>
        <td class="text-end">
          <button @click="removeProduct(item.name)" class="btn btn-outline-secondary rounded-pill">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="container mt-4">
    <div class="d-flex justify-content-between">
      <h4>Total:</h4>
      <h4>{{ formatCurrency(cartTotal) }}</h4>
    </div>

    <div class="d-flex justify-content-between border-bottom py-3">
      <h4>Tax:</h4>
      <h4>{{ formatCurrency(cartTax) }}</h4>
    </div>

    <div class="d-flex justify-content-between py-3">
      <h3>Total with tax:</h3>
      <h3 class="text-center">{{ formatCurrency(cartFullTotal) }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    api: "http://localhost:8089/api/cart",
    newProduct: { name: "", price: "", quantity: "" },
    cartTotal: 0,
    cartTax: 0,
    cartFullTotal: 0,
    cartItems: [],
  }),

  mounted() {
    this.fetchCart();
  },

  methods: {
    fetchCart() {
      axios.all([
        axios.get(`${this.api}/all-products`).then(res => (this.cartItems = res.data)),
        axios.get(`${this.api}/total-cost`).then(res => (this.cartTotal = res.data)),
        axios.get(`${this.api}/total-with-tax`).then((res) => (this.cartFullTotal = res.data)),
        axios.get(`${this.api}/total-tax`).then((res) => (this.cartTax = res.data)),
      ]);
    },
    removeProduct(name) {
      axios.delete(`${this.api}/delete/${name}`).then(this.fetchCart);
    },
    addProduct() {
      axios.post(`${this.api}/post`, this.newProduct).then(this.fetchCart);
      this.newProduct = { name: "", price: "", quantity: "" };
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    },
  },
};
</script>

<style scoped>
/* Remove background gradient from scoped styles */

/* Font styling */
h1, h3, h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

h1 {
  font-size: 2.8rem;
  font-style: italic;
  margin-top: 50px; /* Space before header */
}

h3, h4 {
  font-size: 1.3rem;
  font-weight: 400;
}

/* Table Styling */
.table {
  background-color: #ffffff; /* Pure white for the table */
  border-radius: 8px;
  padding: 20px;
}

.table-hover tbody tr:hover {
  background-color: #f4f7f3; /* Light green hover effect */
}

.table-light th {
  background-color: #e7e8e1; /* Light beige header */
}

/* Inputs Styling */
input, .form-control {
  background-color: #faf9f2; /* Soft beige background */
  border: 1px solid #ddd;
  padding: 12px;
}

input:focus, .form-control:focus {
  border-color: #b0b0a1; /* Subtle greenish border on focus */
  box-shadow: none;
}

/* Buttons */
.btn-outline-primary {
  border-color: #a8c5a3; /* Soft green border */
  color: #a8c5a3; /* Soft green text */
  padding: 12px 24px; /* Added padding for more button size */
  font-size: 1rem; /* Slightly larger font */
}

.btn-outline-primary:hover {
  background-color: #a8c5a3; /* Light green background on hover */
  color: white; /* White text on hover */
}

.btn-outline-secondary {
  border-color: #c0c0b0; /* Soft grey border */
  color: #8b8c7a; /* Light olive-grey text */
  padding: 12px 24px; /* Larger padding */
}

.btn-outline-secondary:hover {
  background-color: #c0c0b0; /* Soft grey background on hover */
  color: #212529;
}

.d-flex {
  font-size: 1.2rem;
}

.table th, .table td {
  vertical-align: middle;
}

.text-muted {
  color: #6c757d !important;
}

.text-primary {
  color: #4b5d48 !important;
}

.text-end {
  text-align: end;
}

.py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.border-bottom {
  border-bottom: 1px solid #ddd;
}

input, .form-control, .btn {
  border-radius: 25px; /* Rounding input and button corners */
}
</style>

<!-- Global Styles for Background Gradient -->
<style>
body {
  background: linear-gradient(135deg, #f5f3e7 0%, #e2e1d7 100%); /* Smooth transition from light beige to darker beige */
  font-family: 'Montserrat', sans-serif; /* Modern font */
  margin-top: 30px; /* Space before the header */
}
</style>
