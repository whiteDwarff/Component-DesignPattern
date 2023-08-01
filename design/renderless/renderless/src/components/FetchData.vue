<script>
import axios from "axios";
export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true
    }
  },
  created() {
    axios.get(this.url)
    .then( res => {
      this.response = res.data;
      this.loading = false;
    })
    .catch( err => {
      alert(' [ERROR] fetching the data', err);
      console.log(err);
    })
  },
  render() {
    // scopedSlots : data만 넘겨줌, (response, loading )
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading
    });
  }

}
</script>