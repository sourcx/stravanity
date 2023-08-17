<template>
  <div v-if="limitReached" class="row pt-4 justify-content-center">
    <div class="col">
      <div class="alert alert-primary px-4" role="alert">
        <div class="row justify-content-between">
          <div class="col-auto">
            Strava API limits have been reached... Please try again in {{ nextLimitReset }} minutes
          </div>
          <div class="col-auto">
            <a
              href="https://github.com/bokub/stravanity/blob/master/README.md#about-strava-api-limits"
              class="alert-link"
              target="_blank"
            >
              About Strava limits
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Problems',
    data: () => ({
      now: new Date(),
    }),
    props: {
      limitReached: {
        type: Boolean,
      },
    },
    computed: {
      nextLimitReset(): string {
        const minutes = this.now.getMinutes();
        return `${15 - (minutes % 15)}`;
      },
    },
    created() {
      setInterval(() => {
        const now = new Date();
        now.setSeconds(now.getSeconds() - 15);
        this.now = now;
      }, 1000);
    },
  });
</script>

<style lang="scss" scoped>
  .connect-button {
    margin: -8px auto;
  }
</style>
