<script setup>
import "./UserDetails.css";
import { ref, onMounted } from "vue";

const props = defineProps({
  id: String,
});

const users = ref([]);

// The Plan was: Bring PARAMS from USERLIST to USERDETAILS and add to the URL
// `https://6180472f8bfae60017adfa54.mockapi.io/users/${props.id}`
// than take all the data from the specific user and display here

const fetchUsers = async () => {
  try {
    const response = await fetch(
      `https://6180472f8bfae60017adfa54.mockapi.io/users`
    );
    const data = await response.json();
    users.value = data.slice(0, 5);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const dateString = users.value[0]?.createdAt;

const formattedDate = ref(
  new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
);

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div className="user-details-container">
    <div className="user-details-header">
      <p className="text">{{ users[0]?.firstName }} {{ users[0]?.lastName }}</p>
      <button className="edit-btn">
        <img src="../../assets/pencil.png" alt="edit" width="15" height="15" />
        Edit
      </button>
    </div>
    <div className="user-details-body">
      <div className="user-details-row">
        <p>First Name:</p>
        <span>{{ users[0]?.firstName }}</span>
      </div>
      <div className="user-details-row">
        <p>Last Name:</p>
        <span>{{ users[0]?.lastName }}</span>
      </div>
      <div className="user-details-row">
        <p>Data Added:</p>
        <span>{{
          new Date(users[0]?.createdAt).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        }}</span>
      </div>
      <div className="user-details-row">
        <p>ID:</p>
        <span>{{ users[0]?.id }}</span>
      </div>
    </div>
  </div>
</template>
