<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const props = defineProps<{
  options: {
    columns: Array<{
      key: string;
      name?: string | null;
      filter?: boolean;
      sort?: boolean;
      width?:string;
    }>;
    data: Array<any>;
    colors?: {
      headRow?: string;
      oddRow?: string;
      evenRow?: string;
      font?: string;
      border?: string;
      card?: string;
    };
  };
}>();

const defaultColors = {
  headRow: "#f4f4f4",
  oddRow: "#fff",
  evenRow: "#f9f9f9",
  font: "#333",
  border: "#ddd",
  card: "#fff",
};

const colors:any = reactive({
  ...defaultColors,
  ...props.options.colors,
});

const filters = reactive<{ [key: string]: string }>({});
const currentPage = ref(1);
const itemsPerPage = ref(10);

const showHide = reactive<{ filter: boolean }>({
  filter: false,
});

const toggleFilter = () => {
  showHide.filter = !showHide.filter;
  if (showHide.filter) {
    props.options.columns.forEach((col) => {
      if (col.filter) {
        filters[col.key] = "";
      }
    });
  } else {
    Object.keys(filters).forEach((key) => {
      filters[key] = "";
    });
  }
};

const getColumnNames = computed(() => {
  return props.options.columns.map((col) => col.name || col.key);
});

const getColumnKeys = computed(() => {
  return props.options.columns.map((col) => col.key);
});

const getColumns = computed(() => {
  return props.options.columns;
});

const getColumnWidths = computed(() => {
  return  props.options.columns.reduce((acc, col) => {
    acc[col.key] = col.width || 'auto';
    return acc;
  }, {} as any);
});

const getData = computed(() => {
  currentPage.value = 1;
  return props.options.data.filter((row) => {
    return props.options.columns.every((col) => {
      if (col.filter) {
        const filterValue = filters[col.key]?.toLowerCase() || "";
        const cellValue = (row[col.key] || "").toString().toLowerCase();
        return cellValue.includes(filterValue);
      }
      return true;
    });
  });
});
const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return getData.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(getData.value.length / itemsPerPage.value);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const changeItemsPerPage = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  itemsPerPage.value = Number(target.value);
  currentPage.value = 1;
};
</script>

<template>
  <div class="table-card">
    <div class="table-head-card">
      <div class="">
        <select class="table-row-selector" @change="changeItemsPerPage">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="table-options">
        <button @click="toggleFilter"><i class="bi bi-funnel"></i></button>
      </div>
    </div>
    <div class="table-body-card">
      <table class="data-table">
        <colgroup>
          <col v-for="(col, index) in getColumns" :key="index" :style="{ width: getColumnWidths[col.key] }" />
        </colgroup>

        <thead>
          <tr class="tr-column-names">
            <slot name="front-column-names" />
            <th v-for="(item) in getColumnNames">
              {{ item }}
            </th>
            <!-- <th>#</th>
            <th>Name</th>
            <th>LastName</th> -->
            <slot name="end-column-names" />
          </tr>

          <tr class="tr-filters" v-if="showHide.filter">
            <slot name="front-column-filter" />
            <th v-for="col in getColumns">
              <input
                class="inp-filter"
                type="text"
                v-if="col.filter"
                v-model="filters[col.key]"
                :placeholder="`Filter by ${col.name || col.key}`"
                aria-label="Filter"
              />
              <!-- how can i add dynamicly here vmodel for filter -->
            </th>
            <slot name="end-column-filter" />
          </tr>
        </thead>

        <tbody>
          <tr v-for="rowData in paginatedData">
            <slot name="front-column-data" />
            <td v-for="colKey in getColumnKeys">
              {{ rowData[colKey] }}
            </td>
            <slot name="end-column-data" />
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-footer-card">
      <div class="goto">

        <input type="number" class="go-to-input" v-model="currentPage">

      </div>
      <div class="pagination">
        <button @click="goToPage(1)" :disabled="currentPage === 1">
          <i class="bi bi-caret-left"></i><i class="bi bi-caret-left"></i>
        </button>
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          <i class="bi bi-caret-left"></i>
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
        >
            {{ page }}
        </button>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          <i class="bi bi-caret-right"></i>
        </button>
        <button
          @click="goToPage(totalPages)"
          :disabled="currentPage === totalPages"
        >
          <i class="bi bi-caret-right"></i>
          <i class="bi bi-caret-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--font-color);
}
.table-card {
  --font-color: v-bind(colors.font);
  --border-color: v-bind(colors.border);
  --headRow-color: v-bind(colors.headRow);
  --evenRow-color: v-bind(colors.evenRow);
  --oddRow-color: v-bind(colors.oddRow);
  --card-color: v-bind(colors.card);
  max-width: 100%;
}

.table-options {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 8px;
}
.table-options button {
  margin: 4px;
  cursor: pointer;

}
.tr-filters input {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
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
.pagination button:first-child {
  border-radius: 10px 0 0 10px;
}
.pagination button:last-child {
  border-radius: 0 10px 10px 0;
}
.pagination button {
  padding: 8px;
  border: 1px solid var(--border-color);
  font-size: 1em;
  background-color: #fff;
  color: #333;
  cursor: pointer;
}

.pagination button:hover {
  padding: 8px;
  border: 1px solid #1967d2;
}
.table-head-card{
  display: flex;
  justify-content: space-between;
}
.table-head-card button {
  padding: 4px;
  border: 1px solid var(--border-color);
  font-size: 1em;
  background-color: #fff;
  cursor: pointer;

}

input {
  padding: 5px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  outline: 0;
}

button {
  padding: 5px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
}

.go-to-input{
  width: 30px;
  margin-right: 4px;
}
.pagination .active {
  background-color: #1967d2;
  color: #fff;
}
.table-card {
  margin: 20px;
  max-width: 100%; /* Ensures card does not exceed viewport width */
  padding: 20px;
  box-sizing: border-box; /* Includes padding in the width calculation */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--card-color);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border-color);
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid var(--border-color);
}

.data-table thead tr th {
  background-color: var(--headRow-color);
  border-bottom: 2px solid var(--border-color);
}

.data-table tbody tr:nth-child(odd) {
  background-color: var(--oddRow-color);
}
.data-table tbody tr:nth-child(even) {
  background-color: var(--evenRow-color);
}

.data-table tbody tr:hover {
  background-color: var(--evenRow-color);
}

.table-row-selector {
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1em;
  background-color: var(--primary-color);
  cursor: pointer;
}

</style>
