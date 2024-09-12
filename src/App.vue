<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/Header/Header.vue";
import Layout from "./components/Layout.vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://6180472f8bfae60017adfa54.mockapi.io/users"
    );
    const data = await response.json();
    users.value = data.slice(0, 5);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <Header />
  <Layout :users="users" />
</template>
