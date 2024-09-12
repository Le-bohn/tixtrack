<script>
import "./Modal.css";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "UserDetails",
  props: {
    users: Array,
    isOpen: Boolean,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
};

const addUser = async () => {
  const response = await fetch(
    "https://6180472f8bfae60017adfa54.mockapi.io/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
    }
  );
};
</script>

<template>
  <div>
    <div className="modal-header">
      <h1>Add User</h1>
      <img
        src="../../assets/button.png"
        alt="close"
        width="30"
        height="30"
        @click="isOpen = false"
      />
    </div>
    <form @submit.prevent="addUser">
      <div className="form-inputs">
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div className="form-group">
          <label for="firstName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
      </div>
      <div className="form-btn">
        <button @click="isOpen = false">x Cancel</button>
        <button>+ Submit</button>
      </div>
    </form>
  </div>
</template>
