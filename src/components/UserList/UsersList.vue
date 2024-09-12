<script>
import Modal from "../Modal/Modal.vue";
import UserDetails from "@/views/UserDetails/UserDetails.vue";
import "./UsersList.css";
import { ref } from "vue";

export default {
  name: "UserList",
  props: {
    users: Array,
  },
};
</script>

<script setup>
const isOpen = ref(false);
</script>

<template>
  <div className="user-list">
    <div className="user-details">
      <router-link :to="{params:{id: users.id}}">
        <div v-for="users in users" :key="users" className="user">
          <div className="list">
            <img
              src="../../assets/user.png"
              alt="user"
              width="20"
              height="20"
            />
            {{ users.firstName }} {{ users.lastName }}
          </div>
          <div>
            <img
              src="../../assets/chevron-right.png"
              alt="user"
              width="20"
              height="20"
            />
          </div>
        </div>
      </router-link>
    </div>
    <button className="add-user-btn" @click="isOpen = true">+ Add User</button>

    <!-- UserDetails -->
     

    <div className="root">
      <div className="modal" v-if="isOpen">
        <Modal :users="users" :isOpen="isOpen" />
      </div>
    </div>
  </div>
</template>
