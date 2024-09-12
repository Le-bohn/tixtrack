<script setup>
import UsersList from "./UserList/UsersList.vue";
import UserDetails from "@/views/UserDetails/UserDetails.vue";
</script>

<script>
export default {
  name: "UserList",
  props: {
    users: Array,
  },
};
</script>

<template>
  <div className="container-app">
    <UsersList :users="users" />
    <UserDetails />
    
  </div>
</template>
