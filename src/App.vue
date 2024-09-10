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
  colors:
      {
        "headRow": "#BC9F8B",      // Primary Terracotta
        "oddRow": "#B5CFB7",       // Soft Sage
        "evenRow": "#CADABF",      // Light Olive
        "font": "#4a4a4a",         // A neutral gray for text (you can adjust this to match the palette if needed)
        "fontHeaderTable": "#4a4a4a", // Neutral Gray (for consistency)
        "border": "#b9b6b6",       // Pale Moss
        "card": "#E7E8D8"          // Pale Moss
      }
      //
      // {
      //   "headRow": "#4A249D",      // Royal Purple
      //   "oddRow": "#F6F5F5",       // Light Gold
      //   "evenRow": "#F6F5F5",      // Soft Gray
      //   "font": "#4A249D",         // Royal Purple (for consistency and readability)
      //   "fontHeaderTable": "#fff", // Royal Purple (for consistency)
      //   "border": "#009FBD",       // Bright Cyan
      //   "card": "#F6F5F5"          // Soft Gray
      // }


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
