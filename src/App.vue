<script setup lang="ts">
import datatable from "./components/datatable.vue";
import OptionModel from "./models/OptionModel.ts";

const options : OptionModel = {
  showCard:{type:true,default :true},
  columns: [
    {
      key: "id",
      name: "Id",
      filter: true,
      sort: true,
      width: '90px'
    },
    {
      key: "name",
      name: "Name",
      filter: true,
      sort: true,
    },
    {
      key: "lastName",
      name: "LastName",
      filter: true,
      sort: true,
    },
  ],
  data: [
    { id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },
    { id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },{ id: 1, name: "Alina", lastName: "Smith" },
    { id: 2, name: "John", lastName: "Dozez" },
    { id: 3, name: "Emma", lastName: "Johnson" },
    { id: 4, name: "Michael", lastName: "Williams" },
    { id: 5, name: "Olivia", lastName: "Brown" },
    { id: 6, name: "James", lastName: "Jones" },
  ],
  colors: {
      headRow: "#4a90e2",
      oddRow: "#ffffff",
      evenRow: "#f4f4f4",
      font: "#333333",
      fontHeaderTable: "#ffffff",
      border: "#e0e0e0",
      card: "#f5f5f5",
    }
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
