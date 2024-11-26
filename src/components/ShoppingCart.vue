<template>
  <h1 class="text-center mb-4">Shopping cart</h1>

  <div class="container mt-4">

    <h3 class="mb-4">Add Product</h3>
    <form class="input-group mb-3">
      <input class="form-control" type="text" name="name" id="name" placeholder="Product Name">
      <input class="form-control" type="text" name="price" id="price" placeholder="Price">
      <input class="form-control" type="text" name="quantity" id="quantity" placeholder="Quantity">
      <button type="button" class="btn btn-outline-secondary">Add Product</button>
    </form>
  </div>

  <div class="container mb-4 ">
    <h3 class="mb-4">Cart Items</h3>

    <ul class="list-group ">
      <li class="list-group-item d-flex justify-content-between align-items-center ">
        Orange - 2 units @ $12
        <button class="btn btn-danger float-right">Remove
        </button>
      </li>
    </ul>

  </div>

  <div class="container ">

    <div class="d-flex justify-content-between">
      <h4>Total:</h4>
      <h4 >${{ cartTotal.toFixed(2) }}</h4>
    </div>

      <div class="d-flex justify-content-between">
      <h4>Tax:</h4>
      <h4 >${{ cartTax.toFixed(2) }}</h4>

    </div>

    <div class="d-flex justify-content-between">
      <h3>Total with tax:</h3>
      <h3 >${{ cartFullTotal.toFixed(2) }}</h3>

    </div>
  </div>
</template>


<script>
import axios from "axios";
//
// export default {
//   data: () => ({
//     apibase: "http://localhost:8089/api/cart",
//     cartTotal: 0,
//     cartTax: 0,
//     cartFullTotal:0,
//   }),
//   mounted() {
//     axios
//         .get(`${this.apibase}/total-cost`)
//         .then((res) => (this.cartTotal = res.data))
//         .catch(console.error),
//         axios
//             .get(`${this.apibase}/total-tax`)
//             .then((res) => (this.cartTax = res.data))
//             .catch(console.error),
//         axios
//             .get(`${this.apibase}/total-with-tax`)
//             .then((res) => (this.cartFullTotal = res.data))
//             .catch(console.error)
//   }
// };

export default {
  data: () => ({
    apibase: "http://localhost:8089/api/cart",
    cartTotal: 0,
    cartTax: 0,
    cartFullTotal: 0,
  }),
  mounted() {
    this.fetchCartTotal();
    this.fetchCartTax();
    this.fetchCartFullTotal();
  },
  methods: {
    fetchCartTotal() {
      axios
          .get(`${this.apibase}/total-cost`)
          .then((res) => {
            this.cartTotal = res.data;
          })
          .catch(console.error);
    },
    fetchCartTax() {
      axios
          .get(`${this.apibase}/total-tax`)
          .then((res) => {
            this.cartTax = res.data;
          })
          .catch(console.error);
    },
    fetchCartFullTotal() {
      axios
          .get(`${this.apibase}/total-with-tax`)
          .then((res) => {
            this.cartFullTotal = res.data;
          })
          .catch(console.error);
    },
  },
}
</script>