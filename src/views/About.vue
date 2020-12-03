<template>
  <v-container>
    <p class="my-4 text-center text-sm-h5 text-md-h4">WHAT IS RGADS</p>
    <span
      class="text-md-h6 text-sm-subtitle-1"
    >This tool provides recommendations for product usage based on customer details. Results are provided as suggestions only for the Sales Team to assist in onboarding and targetting. Business knowledge and expertise are expected to be used in combination with the product.</span>
    
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {

  name: "About",
  components: {},
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
      mounted: function() {
        let elHtml = document.getElementsByTagName("html")[0];
        elHtml.style.overflowY = "hidden";
    },
    destroyed: function() {
        let elHtml = document.getElementsByTagName("html")[0];
        elHtml.style.overflowY = null;
    },

    
  
};

</script>