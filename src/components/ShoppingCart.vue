<template>
  <h1 class="text-center mb-4">Shopping cart</h1>

  <div class="container mt-4">

    <h3 class="mb-4">Add Product</h3>
    <form @submit.prevent="addProduct" class="input-group mb-3">
      <input v-model="newProduct.name" class="form-control" type="text" name="name" id="name" placeholder="Product Name"
             required>
      <input v-model="newProduct.price" class="form-control" type="number" name="price" id="price" placeholder="Price"
             required>
      <input v-model="newProduct.quantity" class="form-control" type="number" name="quantity" id="quantity"
             placeholder="Quantity" required>
      <button type="submit" class="btn btn-outline-secondary">Add Product</button>
    </form>
  </div>

  <div class="container mt-4 ">

    <table class="table">
      <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th class="text-end">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cartItems" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
        <td class="text-end">
          <button @click="removeProduct(item.name)" class="btn btn-danger ">Remove
          </button>
        </td>
      </tr>
      </tbody>


    </table>


  </div>

  <div class="container ">

    <div class="d-flex justify-content-between">
      <h4>Total:</h4>
      <h4>${{ cartTotal.toFixed(2) }}</h4>
    </div>

    <div class="d-flex justify-content-between border-bottom">
      <h4>Tax:</h4>
      <h4>${{ cartTax.toFixed(2) }}</h4>

    </div>

    <div class="d-flex justify-content-between">
      <h3>Total with tax:</h3>
      <h3 class="text-center">${{ cartFullTotal.toFixed(2) }}</h3>

    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: () => ({
    api: "http://localhost:8089/api/cart",
    newProduct: {name: "", price: "", quantity: ""},
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

      ])
    },
    removeProduct(name) {
      axios.delete(`${this.api}/delete/${name}`).then(this.fetchCart);
    },
    addProduct() {
      axios.post(`${this.api}/post`, this.newProduct).then(this.fetchCart);
      this.newProduct = {name: "", price: "", quantity: ""};
    },


  },
}
</script>