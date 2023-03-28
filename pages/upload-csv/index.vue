<template>
  <v-container>

    <div>
      <v-form @submit.prevent="submitCsv">
        <v-file-input
          v-model="csvFile"
          :label="'Select a CSV file'"
          :rules="[csvFile => !!csvFile || 'CSV file is required']"
          accept=".csv"
        ></v-file-input>

        <v-btn color="primary" type="submit">Upload</v-btn>
      </v-form>
    </div>

    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :search="search" v-if="headers" color="primary" :headers="headers" :items="items"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      csvFile: null,
      search: "",
      file: null,
      headers: [],
      items: [],
    };
  },
  mounted() {
    this.fetchTable();
  },
  methods: {
    async fetchTable() {

      let config = {
        method: 'get',
        url: '/api/csv-to-json',
      };

      axios.request(config)
        .then((response) => {
          this.headers = response.data.headers
          this.items = response.data.items
        })
        .catch((error) => {
          console.log(error);
        });

    },
    async submitCsv() {
      const formData = new FormData()
      formData.append('csv', this.csvFile)

      try {
        const response = await axios.post('/api/csv', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        this.fetchTable();
      } catch (error) {
        console.error(error)
      }
    }
  },
};
</script>
