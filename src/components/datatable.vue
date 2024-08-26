<script setup lang="ts">
import { reactive } from "vue";

const showHide = reactive<{ filter: boolean }>({
  filter: false,
});

const togleFilter = () => {
  showHide.filter = !showHide.filter;
};
</script>

<template>
  <div class="table-card">
    <div class="table-head-card">
      <div class="table-options">
        <button>E</button>
        <button @click="togleFilter">F</button>
      </div>
    </div>
    <div class="table-body-card">
      <table>
        <thead>
          <tr class="tr-column-names">
            <th>#</th>
            <th>Name</th>
            <th>LastName</th>
          </tr>
          <tr class="tr-filters" v-if="showHide.filter">
            <th><input class="inp-filter" type="text" /></th>
            <th><input class="inp-filter" type="text" /></th>
            <th><input class="inp-filter" type="text" /></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ylber</td>
            <td>Zeqiri</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>3</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>4</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>5</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>6</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>7</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>8</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>9</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>10</td>
            <td>John</td>
            <td>Smith</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer-card">
      <select class="table-row-selector">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <div class="pagination">
        <button>start</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>end</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-options {
  display: flex;
  flex-direction: row-reverse;
}
.inp-filter {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #838080;
  height: 30px;
  font-size: 16px;
  outline: none;
  margin: 0;
  padding: 0;
}
.table-footer-card {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.pagination button {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
}
.table-card {
  margin: 20px;
  max-width: 100%; /* Ensures card does not exceed viewport width */
  padding: 20px;
  box-sizing: border-box; /* Includes padding in the width calculation */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

td,
th {
  border: 1px solid #ddd;
}

.table-row-selector {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
}
</style>
