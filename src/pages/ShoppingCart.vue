<template>


  <div>

    <CartNavbar />
    <h1 class="text-center mb-4 text-primary">Shopping Cart</h1>

    <div class="container mt-4">
      <AddProductForm :newProduct="newProduct" @update-product="addProduct" />

    </div>

    <div class="container mt-4">
      <CartTable :cartItems="cartItems" @remove-product="removeProduct" />
    </div>

    <div class="container mt-4">
      <CartSummary :cartTotal="cartTotal" :cartTax="cartTax" :cartFullTotal="cartFullTotal" />
    </div>
  </div>
</template>

<script>
import AddProductForm from "@/components/cart/AddProductForm.vue";
import CartTable from "@/components/cart/CartTable.vue";
import CartSummary from "@/components/cart/CartSummary.vue";
import CartNavbar from "@/components/cart/CartNavbar.vue";

import {
  fetchCartItems,
  fetchCartTotal,
  fetchCartTax,
  fetchCartFullTotal,
  addProductToCart,
  removeProductFromCart,
} from "@/api/cart.js";

export default {
  components: {
    CartNavbar,
    AddProductForm,
    CartTable,
    CartSummary,
  },
  data: () => ({
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
    async fetchCart() {
      try {
        const [items, total, tax, fullTotal] = await Promise.all([
          fetchCartItems(),
          fetchCartTotal(),
          fetchCartTax(),
          fetchCartFullTotal(),
        ]);
        this.cartItems = items.data;
        this.cartTotal = total.data;
        this.cartTax = tax.data;
        this.cartFullTotal = fullTotal.data;
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    },
    async addProduct(product) {
      try {
        await addProductToCart(product);
        this.fetchCart();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    async removeProduct(name) {
      try {
        await removeProductFromCart(name);
        this.fetchCart();
      } catch (error) {
        console.error("Error removing product:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Scoped styles for ShoppingCart.vue */
</style>
