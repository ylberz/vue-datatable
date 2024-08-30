<script setup lang="ts">
import datatable from "./components/datatable.vue";

const options = {
  columns: [
    {
      key: "id",
      name: "Id",
      filter: true,
      sort: true,
      width: '20px'
    },
    {
      key: "name",
      name: "Name",
      filter: true,
      sort: true,
      width:'100px'
    },
    {
      key: "lastName",
      name: "LastName",
      filter: true,
      sort: true,
      width:'100px'

    },
  ],
  data: [
    { id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "Jon", lastName: "Doe" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },
    { id: 7, name: "Sophia", lastName: "Garcia" },
    { id: 8, name: "William", lastName: "Dozez" },
    { id: 9, name: "Ava", lastName: "Davis" },
    { id: 10, name: "Benjamin", lastName: "Rodriguez" },
    { id: 11, name: "Mia", lastName: "Wilson" },
    { id: 12, name: "Lucas", lastName: "Anderson" },
    { id: 13, name: "Isabella", lastName: "Thomas" },
    { id: 14, name: "Henry", lastName: "Taylor" },
    { id: 15, name: "Charlotte", lastName: "Moore" },
    { id: 16, name: "Alexander", lastName: "Jackson" },
    { id: 17, name: "Amelia", lastName: "White" },
    { id: 18, name: "Daniel", lastName: "Harris" },
    { id: 19, name: "Harper", lastName: "Martin" },
    { id: 20, name: "Ethan", lastName: "Thompson" },
    { id: 21, name: "Liam", lastName: "Garcia" },
    { id: 22, name: "Ella", lastName: "Martinez" },
    { id: 23, name: "Noah", lastName: "Robinson" },
    { id: 24, name: "Avery", lastName: "Lee" },
    { id: 25, name: "Jack", lastName: "Walker" },
    { id: 26, name: "Sofia", lastName: "Allen" },
    { id: 27, name: "Logan", lastName: "Young" },
    { id: 28, name: "Zoe", lastName: "King" },
    { id: 29, name: "Mason", lastName: "Wright" },
    { id: 30, name: "Lily", lastName: "Scott" },
    { id: 31, name: "Elijah", lastName: "Adams" },
    { id: 32, name: "Aria", lastName: "Baker" },
    { id: 33, name: "Jameson", lastName: "Nelson" },
    { id: 34, name: "Chloe", lastName: "Hill" },
    { id: 35, name: "Gabriel", lastName: "Carter" },
    { id: 36, name: "Grace", lastName: "Mitchell" },
    { id: 37, name: "Owen", lastName: "Perez" },
    { id: 38, name: "Mila", lastName: "Roberts" },
    { id: 39, name: "Samuel", lastName: "Turner" },
    { id: 40, name: "Emily", lastName: "Phillips" },
  ],
  colors: {

      headRow: "#003366",
      oddRow: "#e6f7ff",
      evenRow: "#cceeff",
      font: "#bbb",
      border: "#99ccff",
      card: "#f4faff",
  },
};
</script>

<template>
  <datatable :options>
    <template #end-column-names>
      <th>Action</th>
    </template>
    <template #end-column-filter>
      <th></th>
    </template>
    <template #end-column-data>
      <td><button>Click</button></td>
    </template>
  </datatable>
</template>
